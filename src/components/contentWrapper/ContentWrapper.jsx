import React from "react";
import "./contentWrapper.css";

const ContentWrapper = ({ children }) => {
  return <div className="contentCenter">{children}</div>;
};

export default ContentWrapper;
