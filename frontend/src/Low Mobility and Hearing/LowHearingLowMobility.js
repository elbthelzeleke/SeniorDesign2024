import React, { useState } from "react";
import NavigationBar from "../NavigationBar";
import TimeDate from "./TimeDate.js";
import Lights from "../Low Vision/Lights";
import "./LowHearingLowMobility.css"; 
import Doorbell from "./Doorbell";
import Blinds from "./Blinds.js";
import Shortcuts from "./Shortcuts.js";


function LowHearingLowMobility() {
    const [voiceAssistance, setVoiceAssistance] = useState(false);
    const [temperature, setTemperature] = useState(72);
    const [doorbellAlert, setDoorbellAlert] = useState(false);
    const [caption, setCaption] = useState("");

    // Function to toggle voice assistance
    const toggleVoiceAssistance = () => {
        setVoiceAssistance(!voiceAssistance);
        const message = voiceAssistance ? "Voice Assistance Disabled" : "Voice Assistance Enabled";
        setCaption(message);
        if (!voiceAssistance) {
        speakMessage(message);
        }
    };

    // Function to adjust temperature
    // Handle Temperature Slider Change
    const handleTemperatureChange = (event) => {
    const newTemp = parseInt(event.target.value, 10);
    setTemperature(newTemp);
    setCaption(`Temperature set to ${newTemp}°F`);
    if (voiceAssistance) {
      speakMessage(`Temperature set to ${newTemp} degrees`);
    }
    };
    // Function to simulate doorbell ring
    const triggerDoorbell = () => {
        setDoorbellAlert(true);
        setCaption("🚪 Doorbell Ringing! 🚪");
        setTimeout(() => setDoorbellAlert(false), 3000);
    };

    // Function for text-to-speech
    const speakMessage = (message) => {
        const speech = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(speech);
    };
    //Adopted from the Low Visional Page styling to keep uniformity through the site
    const pageStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f8ff",
        textAlign: "center",
        paddingBottom: "60px",
      };
    
      const cardsContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%", // Take full width of the container (align with the TimeBar width)
        maxWidth: "1200px", // Ensure it doesn't stretch too wide (adjust as needed)
        marginTop: "100px", // Add some margin to space out from the "Front Door" and "Blinds"
      };

      const cardStyle1 = {
        width: "40%",  // Set the first column width to 4%
        height: "400px", // Set height for the card
        margin: "0 10px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px",
      };
    
      const cardStyle = {
        flex: 1, // Ensure all cards take up equal width
        height: "400px", // Set height for the cards
        margin: "0 10px", // Add some spacing between cards
        backgroundColor: "#ffffff", // White background for cards
        borderRadius: "15px", // Rounded corners
        display: "flex",
        flexDirection: "column", // Ensure the content is laid out vertically
        justifyContent: "flex-start", // Align content to the top
        padding: "10px", // Add padding inside the card
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add some shadow for a card effect
      };
    
      const cardStyle2 = {
        width: "60%",  // Set the second column width to 8%
        height: "400px",
        margin: "0 10px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px",
      }; 
      return (
        <div style={pageStyle}>
            <TimeDate />
            <NavigationBar />
            
             {/* Cards Container */}
            <div style={cardsContainerStyle}>
                <div style={cardStyle1}>
                    <Doorbell />
                    <Blinds />
                    <button className="toggle-btn" onClick={toggleVoiceAssistance}>
                        {voiceAssistance ? "Disable Voice Assistance" : "Enable Voice Assistance"}
                    </button>
                    <div className="caption-box">
                        <p>{caption || "Captions will appear here..."}</p>
                    </div>
                    <button className="doorbell-btn" onClick={triggerDoorbell}>Simulate Doorbell Ring</button>
                    {doorbellAlert && <div className="doorbell-alert">🚪 Doorbell Ringing! 🚪</div>}
                </div>
                
                <div style={cardStyle}>
                <h2 style={{ margin: "0 10px 20px 0" }}>Lights</h2> {/* Added margin-bottom for spacing */}
                <Lights />
                
                </div>
                <div style={cardStyle}>
                    <Shortcuts />
                    <div className="temperature-control">
                        <h3>Temperature: {temperature}°F</h3>
                        <input
                        type="range"
                        min="60"
                        max="85"
                        value={temperature}
                        onChange={handleTemperatureChange}
                        className="temperature-slider"
                        />
                    </div>
                </div>
                
               
                
                
            </div>

          
           
        </div>
       
      );
  }
export default LowHearingLowMobility;
