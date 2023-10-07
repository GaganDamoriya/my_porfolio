import React from "react";
import "./project.css";
import ContentBody from "../contentBody/ContentBody";
import Projectdisplay from "./projectdisplay/Projectdisplay";
const Projects = () => {
  return (
    <div className="displayProjects">
      <ContentBody>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="projHeading">PORTFOLIO</span>
          <span className="titleproj">All projects are unique</span>
        </div>
        <div className="projectDisplay">
          <Projectdisplay />
        </div>
      </ContentBody>
    </div>
  );
};

export default Projects;
