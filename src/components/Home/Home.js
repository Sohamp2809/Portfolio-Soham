import React, { useRef, useEffect, useState } from "react";

function Home() {
  const canvasRef = useRef(null);

  // State for window dimensions so our canvas can resize
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // We'll track the mouse position with a ref
  const mouse = useRef({ x: null, y: null });

  // Constants controlling star behavior
  const STAR_COUNT = 300;         // Number of stars
  const MOUSE_RADIUS = 120;      // Cursor detection radius
  const CONNECT_DISTANCE = 100;  // Max distance between stars to draw a line
  const STAR_SIZE_MIN = 1;       // Min star radius
  const STAR_SIZE_MAX = 2.5;     // Max star radius

  // We'll store the star objects in a ref
  // Each star = { x, y, size }
  const starsRef = useRef([]);

  useEffect(() => {
    // On mount, set up star data
    initStars();
    // Animate each frame
    requestAnimationFrame(animate);

    // Cleanup if needed on unmount
    return () => {};
    // eslint-disable-next-line
  }, []);

  // Re-initialize stars when window size changes
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    initStars();
    // eslint-disable-next-line
  }, [dimensions]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create the star objects
  function initStars() {
    const { width, height } = dimensions;
    starsRef.current = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      starsRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (STAR_SIZE_MAX - STAR_SIZE_MIN) + STAR_SIZE_MIN,
      });
    }
  }

  // Animation loop
  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = dimensions;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw each star as a small circle
    const stars = starsRef.current;
    for (let i = 0; i < STAR_COUNT; i++) {
      let s = stars[i];
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    // If the mouse isn't on screen, skip connecting lines
    if (mouse.current.x === null || mouse.current.y === null) {
      requestAnimationFrame(animate);
      return;
    }

    // Gather all stars that are near the mouse
    // so we only connect stars that are also near the mouse
    const nearStars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      let dx = stars[i].x - mouse.current.x;
      let dy = stars[i].y - mouse.current.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS) {
        nearStars.push(stars[i]);
      }
    }

    // Now connect those near-stars if they are also close to each other
    for (let i = 0; i < nearStars.length; i++) {
      for (let j = i + 1; j < nearStars.length; j++) {
        let s1 = nearStars[i];
        let s2 = nearStars[j];
        let dx = s1.x - s2.x;
        let dy = s1.y - s2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DISTANCE) {
          // fade line by distance if you like
          let alpha = 1 - dist / CONNECT_DISTANCE;
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(s1.x, s1.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* The full-screen Canvas */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "#000",  // black background
          display: "block",
          zIndex: 0,
        }}
      />

      {/* Hero text above the canvas */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          top: "30%",
        }}
      >
        <h1>Hello, I'm Soham Patel.</h1>
        <p>I'm a full stack web developer.</p>
        <button
          style={{
            backgroundColor: "transparent",
            border: "2px solid #f00",
            color: "#f00",
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f00";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#f00";
          }}
        >
          View my work ↓
        </button>
      </div>
    </div>
  );
}

export default Home;
