import React from "react";
import BlackBtn from "../../Utils/BlackBtn";
import SecBtn from "../../Utils/SecBtn";

export default function AboutRIghtContent({ refs = null, img = null }) {
  return (
    <article className="about-scroll-container-right-content">
      <div className="img-container" ref={refs}>
        <img src={img} alt="about" />
      </div>
      <div className="buttons">
        <BlackBtn
          style={{
            fontWeight: "500",
            padding: ".5rem 1rem",
            fontSize: ".8rem",
          }}
        >
          Click me
        </BlackBtn>
        <div>
          <SecBtn
            style={{
              fontWeight: "500",
              padding: ".5rem 1rem",
              fontSize: ".8rem",
            }}
          >
            Click me
          </SecBtn>
          <SecBtn
            style={{
              fontWeight: "500",
              padding: ".5rem 1rem",
              fontSize: ".8rem",
              marginLeft: "1rem",
            }}
          >
            Click me
          </SecBtn>
        </div>
      </div>
    </article>
  );
}
