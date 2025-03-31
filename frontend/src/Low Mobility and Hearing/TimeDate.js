import { useState, useEffect } from "react";
import profileImage from "../profile-circle-icon.png";  // Import image


function TimeDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const barStyle = {
    position: "fixed",
    top: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "95%",
    backgroundColor: "lightyellow",
    borderRadius: "20px",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: "23px",
    border: "2px solid black",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const profileImageStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid black",
  };

  const timeStyle = {
    flexGrow: 1,
    textAlign: "center",
  };

  const dateStyle = {
    fontSize: "23px",
    fontWeight: "bold",
  };

  return (
    <div style={barStyle}>
      <div style={profileStyle}>
        <img
          src={profileImage} // Use the imported variable for the image
          alt="Profile"
          style={profileImageStyle}
        />
        <span>Good Morning, User</span>
      </div>


      <div style={timeStyle}>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>

      <div style={dateStyle}>
        {time.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  );
}

export default TimeDate;
