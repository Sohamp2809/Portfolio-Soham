import React, { useRef } from "react";
 // Make sure this CSS is imported

function CustomScrollContainer({ children }) {
  const containerRef = useRef(null);

  const onMouseDown = (e) => {
    const container = containerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
    container.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    const container = containerRef.current;
    container.isDown = false;
    container.style.cursor = "grab";
  };

  const onMouseUp = () => {
    const container = containerRef.current;
    container.isDown = false;
    container.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    const container = containerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // Adjust scroll speed multiplier as needed
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  return (
    <div
      className="custom-scroll-container"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}

export default CustomScrollContainer;
