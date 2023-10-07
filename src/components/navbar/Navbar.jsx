import React from "react";
import "./navbar.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Navbar = () => {
  return (
    <div className="navB">
      <ContentWrapper>
        <div className="navComp">
          <h2>
            <a href="#dashBoard">Gagan Prakash</a>
          </h2>
          <ul className="sideItems">
            <li>
              <a href="#AboutSection">About Me</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#contactss">Contact</a>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Navbar;
