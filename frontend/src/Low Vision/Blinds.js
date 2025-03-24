import { useState } from "react";

function Blinds() {
  const [isOpen, setIsOpen] = useState(true); // Initially open

  // Toggle the status when clicked
  const toggleBlindsStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleBlindsStatus}
      style={{
        width: "40%", // Make it fill the left half of the screen
        height: "50px", // Keep it thin
        backgroundColor: isOpen ? "green" : "red", // Green when open, red when closed
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        fontSize: "30px",
        fontWeight: "bold",
        cursor: "pointer",
        position: "absolute",
        top: "100px", // Position it below the navigation bar (adjust for your navbar height)
        left: "57%", // Align it next to the FrontDoor component
        transition: "background-color 0.3s ease", // Smooth color transition
      }}
    >
      {isOpen ? "Blinds Status: Open" : "Blinds Status: Closed"}
    </div>
  );
}

export default Blinds;
