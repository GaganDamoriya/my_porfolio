import React from "react";
import imgreact from "../../assets/react.svg";
import vite from "../../assets/vite.svg";
import imghtml from "../../assets/html.png";
import imgcss from "../../assets/imgcss.webp";
import imgfirebase from "../../assets/imgfirebase.png";
import imgmongo from "../../assets/imgmongo.png";
import imgscss from "../../assets/imgscss.png";
import imgNode from "../../assets/imgnode.png";
import imgNext from "../../assets/imgnext.webp";
import imgpostman from "../../assets/imgpostman.svg";
import imgtailwind from "../../assets/imgtailwind.png";

import "./techstk.css";
import ContentBody from "../contentBody/ContentBody";

const TechStack = () => {
  return (
    <div className="techStck">
      <ContentBody>
        <div className="headnav">
          <span className="heading">Tech Stack :</span>
        </div>
        <div className="allTech">
          <div className="images">
            <img className="img_icon" src={imgreact} alt="react" />
            <div className="icon_name">React</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imghtml} alt="html" />
            <div className="icon_name">HTML</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgcss} alt="css" />
            <div className="icon_name">CSS</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgscss} alt="scss" />
            <div className="icon_name">Scss</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgNode} alt="node" />
            <div className="icon_name">Nodejs</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgfirebase} alt="firebase" />
            <div className="icon_name">Firebase</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgmongo} alt="mongo" />
            <div className="icon_name">MongoDB</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgNext} alt="Next" />
            <div className="icon_name">NEXT</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgtailwind} alt="tailwind" />
            <div className="icon_name">TailWind</div>
          </div>
          <div className="images">
            <img className="img_icon" src={imgpostman} alt="postman" />
            <div className="icon_name">Postman</div>
          </div>
          <div className="images">
            <img className="img_icon" src={vite} alt="vite" />
            <div className="icon_name">Vite</div>
          </div>
        </div>
      </ContentBody>
    </div>
  );
};

export default TechStack;
