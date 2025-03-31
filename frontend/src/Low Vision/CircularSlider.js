import React, { useState, useRef, useEffect, useCallback } from "react";

const CircularSlider = () => {
  const [angle, setAngle] = useState(0);
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef(null);
  const progressRef = useRef(null);

  const radius = 125;
  const dotRadius = 10;
  const borderThickness = 20;

  // Function to get color based on value
  const getColor = (val) => {
    if (val < 33) return "#4CAF50"; // Green
    if (val < 66) return "#FFC107"; // Yellow
    return "#F44336"; // Red
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && circleRef.current) {
        const circle = circleRef.current;
        const rect = circle.getBoundingClientRect();
        const center_x = rect.left + circle.offsetWidth / 2;
        const center_y = rect.top + circle.offsetHeight / 2;
        const pos_x = e.clientX;
        const pos_y = e.clientY;

        const delta_y = center_y - pos_y;
        const delta_x = center_x - pos_x;

        let newAngle = Math.atan2(delta_y, delta_x) * (180 / Math.PI) - 90;
        if (newAngle < 0) {
          newAngle += 360;
        }

        setAngle(newAngle);
        const newValue = Math.round((newAngle / 360) * 100);
        setValue(newValue);

        const progress = (newAngle / 360) * 100;
        if (progressRef.current) {
          progressRef.current.style.strokeDasharray = `${
            (progress / 100) * 2 * Math.PI * radius
          } ${2 * Math.PI * radius}`;
          progressRef.current.style.stroke = getColor(newValue);
        }
      }
    },
    [isDragging, radius]
  );

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
  }, [isDragging, handleMouseMove]);

  return (
    <div style={{ position: "relative", width: "250px", height: "250px", margin: "50px auto" }}>
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
            stroke={getColor(value)} // Set initial color
            strokeWidth={borderThickness}
            strokeDasharray="0 100"
            ref={progressRef}
            strokeLinecap="round"
          />
        </svg>

        <div
          style={{
            position: "absolute",
            width: `${dotRadius * 2}px`,
            height: `${dotRadius * 2}px`,
            backgroundColor: "red",
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

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "50px",
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
