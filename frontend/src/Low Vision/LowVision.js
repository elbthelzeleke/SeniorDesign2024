import React from "react";
import NavigationBar from "../NavigationBar";
import TimeBar from "../TimeBar";
import FrontDoor from "./FrontDoor";
import Blinds from "./Blinds";
import Lights from "./Lights";
import CircularSlider from "./CircularSlider";

function LowVision() {
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

  const cardStyle = {
    flex: 1, // Ensure all cards take up equal width
    height: "400px", // Set height for the cards
    margin: "0 10px", // Add some spacing between cards
    backgroundColor: "#ffffff", // White background for cards
    borderRadius: "15px", // Rounded corners
    display: "flex",
    flexDirection: "column", // Ensure the content is laid out vertically
    justifyContent: "flex-start", // Align content to the top
    padding: "20px", // Add padding inside the card
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add some shadow for a card effect
  };

  return (
    <div style={pageStyle}>
      <TimeBar />
      <NavigationBar />
      <FrontDoor />
      <Blinds />

      {/* Cards Container */}
      <div style={cardsContainerStyle}>
        <div style={cardStyle}>
          {/* Lights Header */}
          <h2 style={{ margin: "0 10px 20px 0" }}>Lights</h2> {/* Added margin-bottom for spacing */}
          <Lights />
        </div>
        <div style={cardStyle}>
        <h2 style={{ margin: "0 10px 20px 0" }}>Temperature</h2>
        <CircularSlider/>
        </div>
        <div style={cardStyle}>
          ...
        </div>
      </div>
    </div>
  );
}

export default LowVision;
