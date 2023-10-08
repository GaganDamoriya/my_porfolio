import React, { useState } from "react";
import "./projectdisplay.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { projectDatadisplay } from "../../../projectData";
import { BsCoin } from "react-icons/bs";
const Projectdisplay = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="containerProject" id="Projects">
      {projectDatadisplay.map((project, index) =>
        index % 2 === 0 ? (
          <div className="displaydiv" key={index}>
            <div className="img_project">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.imgUrl} alt="web1" />
              </a>
            </div>
            <div className="Content_project">
              <div className="projectTitle">{project.name}</div>
              <div className="projectdes">
                <p>
                  {show ? project.des : `${project.des.substring(0, 100)}...`}
                  <button
                    className="moreinfoBtn"
                    style={{ color: "yellow" }}
                    onClick={() => setShow(!show)}
                  >
                    {show ? "show less" : "show more"}
                  </button>
                </p>
              </div>
              <div className="projectTech">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor:
                        tech === "React"
                          ? "blue"
                          : tech === "Nodejs"
                          ? "green"
                          : tech === "Firebase"
                          ? "yellow"
                          : tech === "MongoDB"
                          ? "yellowgreen"
                          : tech === "Stripe"
                          ? "lightblue"
                          : "transparent", // Default color
                      color: "white",
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {/* <span style={{ backgroundColor: "blue", color: "white" }}>
                  React
                </span>
                <span style={{ backgroundColor: "green", color: "white" }}>
                  Nodejs
                </span> */}
              </div>
              <div className="clickLinks">
                <div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <AiFillGithub />
                  </a>
                </div>
                <div>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    live Demo <BsBoxArrowUpRight style={{ color: "yellow" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="displaydiv" key={index}>
            <div className="Content_project">
              <div className="projectTitle">{project.name}</div>
              <div className="projectdes">
                <p>
                  {show ? project.des : `${project.des.substring(0, 100)}...`}
                  <button
                    className="moreinfoBtn"
                    style={{ color: "yellow" }}
                    onClick={() => setShow(!show)}
                  >
                    {show ? "show less" : "show more"}
                  </button>
                </p>
              </div>
              {console.log(index)}
              <div className="projectTech">
                <span style={{ backgroundColor: "blue", color: "white" }}>
                  React
                </span>
                <span style={{ backgroundColor: "green", color: "white" }}>
                  Nodejs
                </span>
              </div>
              <div className="clickLinks">
                <div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <AiFillGithub />
                  </a>
                </div>
                <div>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    live Demo <BsBoxArrowUpRight style={{ color: "yellow" }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="img_project">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.imgUrl} alt="web1" />
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Projectdisplay;
