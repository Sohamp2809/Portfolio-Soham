import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
 // Using the banner CSS from your attached file

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <div
      className="project-banner"
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h3 className="banner-title">{title}</h3>
          <p className="banner-description">{description}</p>
        </div>
        <a
          className="banner-github-btn"
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub size={20} /> &nbsp; {isBlog ? "Blog" : "GitHub"}
        </a>
        { !isBlog && demoLink && (
          <a
            className="banner-github-btn"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ right: "160px" }}  // Shifts Demo button left from the GitHub button
          >
            <CgWebsite size={20} /> &nbsp; Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
