import React, { useState } from "react";
import "./dashboard.css";
import myImage2 from "../../assets/gags.jpeg";
import ContentBody from "../contentBody/ContentBody";
import TechStack from "../techStack/TechStack";
const DashBoard = () => {
  const [show, setShow] = useState(false);
  const bios = `Welcome to my Full Stack Developer portfolio. With a strong
  passion for web development, I've honed my skills in both
  front-end and back-end technologies. On the front-end, I create
  intuitive and responsive user interfaces using HTML, CSS, and
  JavaScript. `;
  return (
    <div className="dashB" id="dashBoard">
      <ContentBody>
        <div className="heroBanner">
          <div className="heroContent">
            <span
              style={{
                fontSize: 20,
                fontWeight: 10,
                fontFamily: "Pixelify Sans",
              }}
            >
              Hello, there👋
            </span>
            <span className="headingH" style={{ fontFamily: "Pixelify Sans" }}>
              I am Full Stack
            </span>
            <span className="headingH" style={{ fontFamily: "Pixelify Sans" }}>
              Developer.
            </span>
            <p>
              {show ? bios : `${bios.substring(0, 150)}... `}
              <button className="moreinfoBtn" onClick={() => setShow(!show)}>
                {show ? "show less" : "show more"}
              </button>
            </p>
          </div>
          <div className="heroImage">
            <img className="liquid_img" src={myImage2} alt="myimage" />
            <div className="bubbles">
              <div
                className="liquid_img"
                style={{ height: 100, width: 70 }}
              ></div>
              <div
                className="liquid_img"
                style={{ height: 50, width: 30 }}
              ></div>
              <div
                className="liquid_img"
                style={{ height: 20, width: 5 }}
              ></div>
            </div>
          </div>
        </div>
        <TechStack />
      </ContentBody>
    </div>
  );
};

export default DashBoard;
