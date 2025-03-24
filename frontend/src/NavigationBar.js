import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  const [activeKey, setActiveKey] = useState("/home");

  const navBarStyle = {
    position: "fixed",
    bottom: "15px", // Added space at the bottom
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%", // Slightly smaller for a rounded look
    backgroundColor: "lightblue",
    borderRadius: "20px", // Rounded edges
    border: "2px solid black",
    display: "flex",
    justifyContent: "space-around",
    padding: "12px 0",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow effect
  };

  const linkStyle = {
    color: "black",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "20px", // Rounded edges for all links
    transition: "all 0.3s ease-in-out",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "blue",
    color: "white",
  };

  return (
    <Nav
      variant="pills"
      activeKey={activeKey}
      onSelect={(selectedKey) => setActiveKey(selectedKey)}
      style={navBarStyle}
    >
      <Nav.Item>
        <Nav.Link
          eventKey="/settings"
          href="/settings"
          style={activeKey === "/settings" ? activeLinkStyle : linkStyle}
        >
          Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="/home"
          href="/home"
          style={activeKey === "/home" ? activeLinkStyle : linkStyle}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="/profile"
          href="/profile"
          style={activeKey === "/profile" ? activeLinkStyle : linkStyle}
        >
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationBar;
