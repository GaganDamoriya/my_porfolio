import React from "react";
import "./contact.css";
import ContentBody from "../contentBody/ContentBody";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contactMe" id="contactss">
      <ContentBody>
        <div>
          <div className="contact_heading">Contact Me</div>
          <div className="contactMeLinks">
            <div>
              <a
                href="https://github.com/GaganDamoriya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/Gagan__Prakash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoGmail />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/Gagan__Prakash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/gagan-prakash-damoriya-1b884b21b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </ContentBody>
      <div className="follow">
        <a
          href="https://twitter.com/Gagan__Prakash"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect via twitter <RiTwitterXFill />
        </a>
      </div>
    </div>
  );
};

export default Contact;
