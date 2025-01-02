import React, { useEffect, useRef, useState } from "react";
import BlackBtn from "../../Utils/BlackBtn";
import { useNavigate } from "react-router-dom";

export default function AboutLeftContent({ content }) {
  const prevContentRef = useRef(content);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();

  const handleRegisterNow = () => {
    navigate("/enquiry");
  };

  useEffect(() => {
    if (
      prevContentRef.current.title !== content.title ||
      prevContentRef.current.description !== content.description
    ) {
      setShouldAnimate(true);
      prevContentRef.current = content;
    }
  }, [content]);

  return (
    <div
      className={`about-scroll-container-left-content ${
        shouldAnimate ? "animate-mount" : ""
      }`}
    >
      <div className="home-text">
        <span>{content.title}</span>
      </div>
      <div className="about-para-container">
        <BlackBtn onClick={handleRegisterNow}>Register Now</BlackBtn>
        <p className="about-para-container-right">{content.description}</p>
      </div>
    </div>
  );
}
