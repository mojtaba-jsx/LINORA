import React from "react";
import "./MainTitle.css";

function MainTitle({ title }) {
  return (
    <div className="container">
      <h1 className="main-title__text">{title}</h1>
    </div>
  );
}

export default MainTitle;
