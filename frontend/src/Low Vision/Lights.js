import React, { useState } from "react";

function Lights() {
  const [livingRoom, setLivingRoom] = useState(false); // Track the state of the Living Room light
  const [diningRoom, setDiningRoom] = useState(false); // Track the state of the Dining Room light
  const [bedroom, setBedroom] = useState(false); // Track the state of the Bedroom light

  // Function to toggle the light state
  const toggleLight = (room) => {
    if (room === "livingRoom") {
      setLivingRoom(!livingRoom);
    } else if (room === "diningRoom") {
      setDiningRoom(!diningRoom);
    } else if (room === "bedroom") {
      setBedroom(!bedroom);
    }
  };

  const toggleStyle = (isOn) => ({
    borderColor: isOn ? "green" : "black", // Green border when on, black when off
    backgroundColor: isOn ? "green" : "white", // Green when on, white when off
    transform: isOn ? "translateX(26px)" : "translateX(0)", // Slide effect
  });

  return (
    <div>
      {/* Living Room */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontSize: "18px" }}>Living Room</label>
        <div
          style={{
            width: "60px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, border-color 0.3s",
          }}
          onClick={() => toggleLight("livingRoom")}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "black", // Initially black
              borderRadius: "50%",
              transition: "transform 0.3s, background-color 0.3s, border-color 0.3s",
              ...toggleStyle(livingRoom),
            }}
          />
        </div>
      </div>

      {/* Dining Room */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontSize: "18px" }}>Dining Room</label>
        <div
          style={{
            width: "60px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, border-color 0.3s",
          }}
          onClick={() => toggleLight("diningRoom")}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "black", // Initially black
              borderRadius: "50%",
              transition: "transform 0.3s, background-color 0.3s, border-color 0.3s",
              ...toggleStyle(diningRoom),
            }}
          />
        </div>
      </div>

      {/* Bedroom */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontSize: "18px" }}>Bedroom</label>
        <div
          style={{
            width: "60px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, border-color 0.3s",
          }}
          onClick={() => toggleLight("bedroom")}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "black", // Initially black
              borderRadius: "50%",
              transition: "transform 0.3s, background-color 0.3s, border-color 0.3s",
              ...toggleStyle(bedroom),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Lights;
