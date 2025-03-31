import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import LowVision from "./Low Vision/LowVision";
import LowHearingLowMobility from "./Low Mobility and Hearing/LowHearingLowMobility"

function Home() {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    flexDirection: "column",
  };

  const profileContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  const profileStyle = {
    width: "250px",
    height: "150px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "2px solid black",
    textAlign: "center",
  };

  const lowVisionStyle = {
    ...profileStyle,
    backgroundColor: "#ADD8E6",
  };

  const lowMobilityStyle = {
    ...profileStyle,
    backgroundColor: "#FFD700",
  };

  return (
    <div style={containerStyle}>
      <h2>Select Profile</h2>
      <div style={profileContainerStyle}>
        <div style={lowVisionStyle} onClick={() => navigate("/low-vision")}>
          Low Vision
        </div>
        <div style={lowMobilityStyle} onClick={() => navigate("/low-hearing-low-mobility")}>
          Low Mobility & Low Hearing
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/low-vision" element={<LowVision />} />
        <Route path="/low-hearing-low-mobility" element={<LowHearingLowMobility />} /> 
      </Routes>
    </Router>
  );
}

export default App;
