import React, { useState, useRef, useEffect, useCallback } from "react";

const CircularSlider = () => {
  const [angle, setAngle] = useState(0); // Angle of the dot
  const [value, setValue] = useState(0); // Value from 0 to 100
  const [isDragging, setIsDragging] = useState(false); // Track if dragging is in progress
  const circleRef = useRef(null); // Reference to the circle container
  const progressRef = useRef(null); // Reference to the progress circle

  const radius = 125; // Radius of the circle
  const dotRadius = 10; // Radius of the dot (indicator)
  const borderThickness = 20; // Border thickness of the circle

  // Memoize the mouse move handler using useCallback
  const handleMouseMove = useCallback((e) => {
    if (isDragging && circleRef.current) {
      const circle = circleRef.current;
      const rect = circle.getBoundingClientRect();
      const center_x = rect.left + circle.offsetWidth / 2;
      const center_y = rect.top + circle.offsetHeight / 2;
      const pos_x = e.clientX;
      const pos_y = e.clientY;

      const delta_y = center_y - pos_y;
      const delta_x = center_x - pos_x;

      // Calculate the angle based on mouse position
      let newAngle = Math.atan2(delta_y, delta_x) * (180 / Math.PI) - 90;
      if (newAngle < 0) {
        newAngle += 360;
      }

      setAngle(newAngle);

      // Map the angle (0 to 360) to a value (0 to 100)
      const newValue = Math.round((newAngle / 360) * 100);
      setValue(newValue);

      // Update the progress path (blue color) based on the angle
      const progress = (newAngle / 360) * 100;
      if (progressRef.current) {
        progressRef.current.style.strokeDasharray = `${(progress / 100) * 2 * Math.PI * radius} ${2 * Math.PI * radius}`;
      }
    }
  }, [isDragging, radius]);

  // Handle mouse down to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove]); // Include handleMouseMove as a dependency

  return (
    <div
      style={{
        position: "relative",
        width: "250px",
        height: "250px",
        margin: "50px auto",
      }}
    >
      {/* Outer circle track (background) */}
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          borderRadius: "50%",
          border: `${borderThickness}px solid #ddd`,
          background: "transparent",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Progress path */}
        <svg
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#007BFF" // Blue color for the progress part
            strokeWidth={borderThickness}
            strokeDasharray="0 100" // Initially no progress
            ref={progressRef}
            strokeLinecap="round"
          />
        </svg>

        {/* Indicator dot */}
        <div
          style={{
            position: "absolute",
            width: `${dotRadius * 2}px`,
            height: `${dotRadius * 2}px`,
            backgroundColor: "#F05D5D", // Red color for the dot
            borderRadius: "50%",
            top: `calc(50% - ${dotRadius}px)`,
            left: `calc(50% - ${dotRadius}px)`,
            transform: `rotate(${angle}deg) translateY(-${radius - dotRadius}px)`,
            transformOrigin: "center center",
            zIndex: 2,
            cursor: "pointer",
          }}
        ></div>
      </div>

      {/* Value in the center of the circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "50px", // Larger font size for visibility
          fontWeight: "bold",
          color: "#4379FF",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default CircularSlider;
