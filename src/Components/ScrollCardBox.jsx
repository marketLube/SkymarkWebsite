import React from "react";

export default function ScrollCardBox({ color = "green", type = "green" }) {
  let titleCol = "black";
  let stepCol = "white";
  let textCol = "black";

  if (type === "blue") {
    titleCol = "white";
    stepCol = "black";
    textCol = "white";
  }

  return (
    <div className="scroll-card-box">
      <div
        className="scroll-card-box-container"
        style={{ backgroundColor: color }}
      >
        <div className="scroll-card-box-left">
          <div className="step">
            <span
              className="num"
              style={{ backgroundColor: textCol, color: stepCol }}
            >
              1
            </span>
            <span style={{ color: textCol }}>Step</span>
          </div>
          <div className="title" style={{ color: titleCol }}>
            <div>Lorem ipsum dolor sit amet,</div>
            <p style={{ color: textCol }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
        <div className="scroll-card-box-right"></div>
      </div>
    </div>
  );
}
