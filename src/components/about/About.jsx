import React from "react";
import imgAboutMe from "../../assets/abouimg.jpeg";
import "./about.css";
import ContentBody from "../contentBody/ContentBody";

const About = () => {
  return (
    <div className="aboutMediv" id="AboutSection">
      <ContentBody>
        <h2 className="aboutme_heading mob-view">About me</h2>
        <div className="about_Me">
          <div className="aboutimg">
            <img src={imgAboutMe} alt="AboutMe" />
          </div>
          <div className="aboutContent">
            <div className="aboutme_heading web_view">About me</div>
            <div className="aboutme_title">
              A dedicated Full-Stack Developer from Noida, NCR📍
            </div>
            <div className="aboutme_intro">
              As a Full Stack Developer, I thrive in the realm of web
              development, with a strong command of front-end technologies like
              React,Nodejs,React Redux,etc,.. My skills extend to the backend,
              where I'm always exploring and keep experimenting with new
              technology, APIs,dataBase etc . Committed to crafting seamless
              user experiences and writing clean, efficient code, I bridge the
              gap between design and functionality. My passion for innovation
              and problem-solving fuels my ambition to excel further in both
              frontend and backend development. With a dynamic skill set, I'm
              poised to create impactful digital solutions and contribute
              meaningfully to any project.
            </div>
          </div>
        </div>
      </ContentBody>
    </div>
  );
};

export default About;
