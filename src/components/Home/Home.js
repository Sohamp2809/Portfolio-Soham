import React, { useRef, useEffect, useState } from "react";
import Home2 from "./Home2";

function Home() {
  const canvasRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const mouse = useRef({ x: null, y: null });
  const dotsRef = useRef([]);

  // Initialize canvas and start drawing dots
  useEffect(() => {
    initCanvas();
    const drawInterval = setInterval(createDots, 1000 / 30);
    return () => clearInterval(drawInterval);
    // eslint-disable-next-line
  }, []);

  // Listen for window resize
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

  // Re-initialize canvas on dimension changes
  useEffect(() => {
    initCanvas();
    // eslint-disable-next-line
  }, [dimensions]);

  // Track mouse movement and update first dot to follow the cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.pageX;
      mouse.current.y = e.pageY;
      if (dotsRef.current.length > 0) {
        dotsRef.current[0].x = e.pageX;
        dotsRef.current[0].y = e.pageY;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Use white for dots and constant white with 40% opacity for lines
  const colorDot = ["rgb(255, 255, 255)"];
  let lineColor = "rgba(42, 98, 150, 0.4)";

  function getDotConfig(width) {
    if (width > 1600) {
      return { nb: 600, distance: 70, d_radius: 300 };
    } else if (width > 1300) {
      return { nb: 575, distance: 60, d_radius: 280 };
    } else if (width > 1100) {
      return { nb: 500, distance: 55, d_radius: 250 };
    } else if (width > 800) {
      return { nb: 300, distance: 0, d_radius: 0 };
    } else if (width > 600) {
      return { nb: 200, distance: 0, d_radius: 0 };
    } else {
      return { nb: 100, distance: 0, d_radius: 0 };
    }
  }

  function initCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = lineColor;

    const config = getDotConfig(canvas.width);
    dotsRef.current = [];
    for (let i = 0; i < config.nb; i++) {
      dotsRef.current.push(createDot(canvas, config));
    }

    // Set first dot's color to dark blue (e.g. mouse-following dot)
    if (dotsRef.current.length > 0) {
      dotsRef.current[0].radius = 1.5;
      dotsRef.current[0].colour = "rgb(10, 10, 70)";
    }
  }

  function createDot(canvas, config) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    return {
      x,
      y,
      vx: -0.5 + Math.random(),
      vy: -0.5 + Math.random(),
      radius: Math.random() * 1.5,
      colour: colorDot[Math.floor(Math.random() * colorDot.length)],
      config,
    };
  }

  function createDots() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const dotsArray = dotsRef.current;
    if (dotsArray.length === 0) return;
    for (let i = 0; i < dotsArray.length; i++) {
      const d = dotsArray[i];
      drawDot(ctx, d);
      if (i !== 0) {
        animateDot(d, canvas);
      }
    }
    line(ctx, dotsArray[0].config);
  }

  function drawDot(ctx, dot) {
    const dotDistance = Math.hypot(
      dot.x - (mouse.current.x || 0),
      dot.y - (mouse.current.y || 0)
    );
    const distanceRatio = dotDistance / (canvasRef.current.width / 1.7);
    const alpha = Math.max(0.6, 1 - distanceRatio);
    // Convert the "rgb(255, 255, 255)" string to rgba using the calculated alpha
    const colorFaded = dot.colour.replace("rgb(", "rgba(").replace(")", `,${alpha})`);
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = colorFaded;
    ctx.fill();
  }

  function animateDot(dot, canvas) {
    if (dot.y < 0 || dot.y > canvas.height) {
      dot.vy = -dot.vy;
    } else if (dot.x < 0 || dot.x > canvas.width) {
      dot.vx = -dot.vx;
    }
    dot.x += dot.vx;
    dot.y += dot.vy;
  }

  function line(ctx, config) {
    const dotsArray = dotsRef.current;
    for (let i = 0; i < config.nb; i++) {
      for (let j = 0; j < config.nb; j++) {
        const i_dot = dotsArray[i];
        const j_dot = dotsArray[j];
        if (
          i_dot.x - j_dot.x < config.distance &&
          i_dot.y - j_dot.y < config.distance &&
          i_dot.x - j_dot.x > -config.distance &&
          i_dot.y - j_dot.y > -config.distance
        ) {
          if (
            i_dot.x - (mouse.current.x || 0) < config.d_radius &&
            i_dot.y - (mouse.current.y || 0) < config.d_radius &&
            i_dot.x - (mouse.current.x || 0) > -config.d_radius &&
            i_dot.y - (mouse.current.y || 0) > -config.d_radius
          ) {
            ctx.beginPath();
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            // Use the constant lineColor
            ctx.strokeStyle = lineColor;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }

  // Scroll smoothly to the Home2 section (with id "home2-section")
  function handleViewMyWork() {
    const home2Section = document.getElementById("home2-section");
    if (home2Section) {
      home2Section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section>
      <div className="home-section">
        <canvas ref={canvasRef} className="home-canvas" />
        <div className="hero-text">
          <h1>Hello, I'm Soham.</h1>
          <p>I'm A Full Stack Web Developer.</p>
          <button
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#000";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#000";
            }}
            onClick={handleViewMyWork}
          >
            Introduction ↓
          </button>
        </div>
      </div>
      {/* Home2 is rendered immediately after, with an id for scrolling */}
      <Home2 />
    </section>
  );
}

export default Home;
