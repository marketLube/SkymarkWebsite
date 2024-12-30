import React, { useEffect, useState, useRef } from "react";
import BlackBtn from "../Utils/BlackBtn";

export default function StudyIn() {
  const [headingText, setHeadingText] = useState("Research");
  const [paraText, setParaText] = useState(
    "Look for grammar, spelling mistakes, and make sure you proper nouns. A paragraph three parts:"
  );
  const [animate, setAnimate] = useState(false); // State to trigger animation

  const textArray = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "New Zealand",
    "Ireland",
    "Germany",
  ];

  const paraArray = [
    "Look for grammar, spelling mistakes, and make sure you proper nouns. A paragraph three parts:",
    "Examining data patterns and trends to draw meaningful insights and conclusions.",
    "Exploring new possibilities and uncovering hidden connections in research.",
    "Creating new solutions and pushing boundaries through creative thinking.",
    "Gaining knowledge and understanding through systematic study and practice.",
    "Finding specific information and resources through methodical investigation.",
    "Dedicating time to understand complex topics and master new skills.",
  ];

  const containerRef = useRef(null);
  const lastScrollTime = useRef(0);
  const lastIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      if (rect.top <= 0) {
        const scrolledPastTop = Math.abs(rect.top);
        const scrollMultiplier = 5;
        const viewportHeight = window.innerHeight;
        const scrollSegment =
          (viewportHeight / textArray.length) * scrollMultiplier;

        const index = Math.min(
          Math.ceil(scrolledPastTop / scrollSegment),
          textArray.length - 1
        );

        if (index !== lastIndex.current) {
          lastIndex.current = index;
          setHeadingText(textArray[index]);
          setParaText(paraArray[index]);

          setAnimate(false); // Reset animation state
          setTimeout(() => setAnimate(true), 0);
        }
      } else {
        if (lastIndex.current !== 0) {
          lastIndex.current = 0;
          setHeadingText(textArray[0]);
          setParaText(paraArray[0]);

          setAnimate(false); // Reset animation state
          setTimeout(() => setAnimate(true), 0); // Reapply animation
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textArray, paraArray]);

  return (
    <div className="research" ref={containerRef}>
      <div className="research-scrol">
        <span className="research-head-desc">Study In</span>
        <div
          className={`research-head ${animate ? "animate" : ""}`} // Apply animation class dynamically
        >
          {headingText}
        </div>
        <p
          className={`research-para ${animate ? "animate" : ""}`} // Apply animation class dynamically
        >
          {paraText}
        </p>
        <div className="research-bttn">
          <BlackBtn style={{ padding: "1rem 2.3rem" }}>The Process</BlackBtn>
        </div>

        <div className="research-enrolled">1,11,11,131 Students Enrolled</div>
      </div>
    </div>
  );
}
