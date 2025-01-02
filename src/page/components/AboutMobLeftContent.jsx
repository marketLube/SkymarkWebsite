import React, { useEffect, useRef, useState } from "react";
import BlackBtn from "../../Utils/BlackBtn";

export default function AboutMobLeftContent({ content }) {
  const prevContentRef = useRef(content);
  const [shouldAnimate, setShouldAnimate] = useState(false);

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
      className={`about-scrolll-mob-left ${
        shouldAnimate ? "animate-mount" : ""
      }`}
    >
      <div className="home-text">
        <span>{content.title}</span>
      </div>
      <BlackBtn style={{ marginBottom: "1rem" }}>Click me</BlackBtn>
      <div className="about-mob-para-container">
        <p className="about-mob-para">{content.description}</p>
      </div>
    </div>
  );
}
