import React from "react";
import BlackBtn from "../../Utils/BlackBtn";

export default function AboutLeftContent({ content }) {
  return (
    <div className="about-scroll-container-left-content animate-moun">
      <div className="home-text">
        <span>{content.title}</span>
      </div>
      <div className="about-para-container">
        <BlackBtn>Click me</BlackBtn>
        <p className="about-para-container-right">{content.description}</p>
      </div>
    </div>
  );
}
