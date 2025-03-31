import { useState } from "react";

function Doorbell() {
  const [isLocked, setIsLocked] = useState(true); // Initially locked

  // Toggle the status when clicked
  const toggleLockStatus = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div
      onClick={toggleLockStatus}
      style={{
        width: "100%", // Make it fill the left half of the screen
        height: "70px", // Keep it thin
        backgroundColor: isLocked ? "green" : "red", // Green when locked, red when unlocked
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
      {isLocked ? "Front Door Status: Locked" : "Front Door Status: Unlocked"}
    </div>
  );
}

export default Doorbell;
