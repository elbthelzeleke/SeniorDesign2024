import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddWidget() {
  const [buttonColor, setButtonColor] = useState("success"); // Button color state
  const [show, setShow] = useState(false); // Modal visibility state

  // Toggle button color and show modal
  const handleClick = () => {
    setButtonColor(buttonColor === "success" ? "primary" : "success"); // Toggle color
    setShow(true); // Show the modal
  };

  const handleCloseModal = () => setShow(false); // Close modal function

  return (
    <>
      {/* Button: Initially green, changes to blue on click */}
      <Button
        variant={buttonColor} // Green (success) or Blue (primary)
        onClick={handleClick}
        style={{ width: "50px", height: "50px" }}
      >
        +
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Widget Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your widget content goes here */}
          <p>Here you can add a new widget!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddWidget;
