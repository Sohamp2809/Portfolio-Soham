import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Particle from "../Particle";
import ProjectCards from "./ProjectCards";

// Import your images
import Online from "../../Assets/Projects/Online.png";
import Com from "../../Assets/Projects/Com.png";
import Task from "../../Assets/Projects/Task.png";
import Python from "../../Assets/Projects/Python.png";
import Tabluea from "../../Assets/Projects/Tabluea.png"

function Projects() {
  // Example slider settings showing 2 slides at once
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,      // Show 2 projects side by side
    slidesToScroll: 1,
    centerMode: false,    // No center mode
    centerPadding: "0px",
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 3000,  // 3 seconds per slide
    arrows: false,        // Hide arrows, rely on dots
    draggable: true,      // Enable dragging with the cursor
    swipe: true,          // Allow swipe gestures
    touchMove: true,      // Enable touch-based scrolling
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  
  

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1  className="heading-glow">
          My Recent <strong className="">Works </strong>
        </h1>
        <p
  style={{
    color: "#333",
    fontSize: "1.5rem",
    fontWeight: 300,
    marginBottom: "1.5rem",
    textAlign: "center",
  }}
>
  Here are a few projects I've worked on recently.
</p>

        <h1 className="heading-typewriter">
          Software Development Projects
        </h1>
        <Slider {...sliderSettings}>
          <div>
            <ProjectCards
              imgPath={Online}
              title="Online Exam Portal"
              description="Online exam portal built with Spring Boot, MySQL, and React."
              ghLink="https://github.com/Sohamp2809/Online-Exam-Portal"
            />
          </div>
          <div>
            <ProjectCards
              imgPath={Com}
              title="My Ecommerce Store"
              description="Interactive app for daily scheduling and task management."
              ghLink="https://github.com/Sohamp2809/My-Ecommerce-Store-"
            />
          </div>
          <div>
            <ProjectCards
              imgPath={Task}
              title="Day time scheduling"
              description="Interactive app for daily scheduling and task management."
              ghLink="https://github.com/Sohamp2809/Day-time-scheduling"
            />
          </div>
          <div>
            <ProjectCards
              imgPath={Task}
              title="Hospital-Management-System"
              description="Empowering efficient healthcare with a user-friendly, all-in-one management solution."
              ghLink="https://github.com/Sohamp2809/Hospital-Management-System"
            />
          </div>
        </Slider>

        <h1 className="htypewritereading-" style={{ marginTop: "50px" }}>
          Data-Driven Projects
        </h1>
        <Slider {...sliderSettings}>
          <div>
            <ProjectCards
              imgPath={Tabluea} // Use a real data-driven project image
              title="Chicago Crime Dashboard"
              description="Interactive Tableau dashboard for Chicago crimes."
              ghLink="https://github.com/Sohamp2809/Chicago-Crime-Dashboard"
            />
          </div>
          <div>
            <ProjectCards
              imgPath={Python} // Another data-driven project
              title="School Performance Prediction"
              description="Predictive analytics for Arizona school performance data."
              ghLink="https://github.com/Sohamp2809/School-Performance-Prediction"
            />
          </div>
        </Slider>
      </Container>
    </Container>
  );
}

export default Projects;
