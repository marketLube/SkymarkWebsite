import React from "react";

export default function ScrollCardBox({ data }) {
  let titleCol = "black";
  let stepCol = "white";
  let textCol = "black";

  if (data.type === "blue") {
    titleCol = "white";
    stepCol = "black";
    textCol = "white";
  }
  if (data.type === "green") {
    titleCol = "black";
    stepCol = "white";
    textCol = "black";
  }

  const isTab = window.innerWidth < 768;
  return (
    <div className="scroll-card-box">
      <div
        className="scroll-card-box-container"
        style={{ backgroundColor: data.color }}
      >
        <div className="scroll-card-box-left">
          <div className="step">
            <span
              className="num"
              style={{ backgroundColor: textCol, color: stepCol }}
            >
              {data.span}
            </span>
            <span style={{ color: textCol }}>Step</span>
          </div>
          {isTab && (
            <div className="scroll-card-box-center">
              <img src={data.img} alt="" />
            </div>
          )}
          <div className="title" style={{ color: titleCol }}>
            <div>{data.title}</div>
            <p style={{ color: textCol }}>{data.desc}</p>
          </div>
        </div>
        {!isTab && (
          <div className="scroll-card-box-right">
            <img src={data.img} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
