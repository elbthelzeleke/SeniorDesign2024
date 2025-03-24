import { useState } from "react";

function FrontDoor() {
  const [isLocked, setIsLocked] = useState(true); // Initially locked

  // Toggle the status when clicked
  const toggleLockStatus = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div
      onClick={toggleLockStatus}
      style={{
        width: "40%", // Make it fill the left half of the screen
        height: "50px", // Keep it thin
        backgroundColor: isLocked ? "green" : "red", // Green when locked, red when unlocked
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        position: "absolute",
        top: "100px", // Position it below the navigation bar (adjust for your navbar height)
        left: "30px", // Align it to the left side of the screen
        transition: "background-color 0.3s ease", // Smooth color transition
        fontSize: '30px',
      }}
    >
      {isLocked ? "Front Door Status: Locked" : "Front Door Status: Unlocked"}
    </div>
  );
}

export default FrontDoor;
