import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SettingsPage.css';

function SettingsPage() {
  const [settings, setSettings] = useState([]);
  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    fetchAllSettings();
  }, []);

  // GET /settings
  const fetchAllSettings = async () => {
    try {
      // Adjust the URL/port if your .NET app runs elsewhere
      const res = await axios.get('http://localhost:5011/settings');
      setSettings(res.data);
    } catch (err) {
      console.error('Error fetching settings:', err);
    }
  };

  // POST /settings
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5011/settings', {
        key: keyInput,
        value: valueInput
      });
      // Refresh the list
      fetchAllSettings();
      // Clear inputs
      setKeyInput('');
      setValueInput('');
    } catch (err) {
      console.error('Error saving setting:', err);
    }
  };

  // DELETE /settings/{key}
  const handleDelete = async (key) => {
    try {
      await axios.delete(`http://localhost:5011/settings/${key}`);
      fetchAllSettings();
    } catch (err) {
      console.error('Error deleting setting:', err);
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings (In-Memory)</h1>
      
      <form className="settings-form" onSubmit={handleSave}>
        <div className="form-group">
          <label>Key:</label>
          <input
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Value:</label>
          <input
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Setting</button>
      </form>

      <h2>Existing Settings</h2>
      <ul className="settings-list">
        {settings.map((s) => (
          <li key={s.key}>
            <strong>{s.key}</strong>: {s.value}
            <button onClick={() => handleDelete(s.key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SettingsPage;
