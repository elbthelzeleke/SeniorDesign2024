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
        width: "100%", // Make it fill the left half of the screen
        height: "70px", // Keep it thin
        backgroundColor: isOpen ? "green" : "red", // Green when open, red when closed
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s ease", // Smooth color transition
        marginBottom: "20px",
      }}
    >
      {isOpen ? "Blinds Status: Open" : "Blinds Status: Closed"}
    </div>
  );
}

export default Blinds;
