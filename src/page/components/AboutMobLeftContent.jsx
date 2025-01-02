import React, { useEffect, useRef, useState } from "react";
import BlackBtn from "../../Utils/BlackBtn";
import { useNavigate } from "react-router-dom";

export default function AboutMobLeftContent({ content }) {
  const prevContentRef = useRef(content);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      prevContentRef.current.title !== content.title ||
      prevContentRef.current.description !== content.description
    ) {
      setShouldAnimate(true);
      prevContentRef.current = content;
    }
  }, [content]);

  const handleRegisterNow = () => {
    console.log("Register Now");
    navigate("/enquiry");
  };

  return (
    <div
      className={`about-scrolll-mob-left ${
        shouldAnimate ? "animate-mount" : ""
      }`}
    >
      <div className="home-text">
        <span>{content.title}</span>
      </div>
      <BlackBtn style={{ marginBottom: "1rem" }} onClick={handleRegisterNow}>
        Register Now
      </BlackBtn>
      <div className="about-mob-para-container">
        <p className="about-mob-para">{content.description}</p>
      </div>
    </div>
  );
}
