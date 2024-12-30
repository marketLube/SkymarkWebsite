import React, { useEffect, useState, useRef } from "react";
import BlackBtn from "../Utils/BlackBtn";

export default function StudyIn() {
  const [headingText, setHeadingText] = useState("Research");
  const [paraText, setParaText] = useState(
    "Look for grammar, spelling mistakes, and make sure you proper nouns. A paragraph three parts:"
  );
  const [animate, setAnimate] = useState(false); // State to trigger animation

  const textArray = [
    "United Kingdom",
    "Germany",
    "USA",
    "Canada",
    "Ireland",
    "Australia",
    "New Zealand",
  ];

  const paraArray = [
    "High-quality education and diverse cultural experiences for students.",
    "World-class education with low or no tuition fees for students.",
    "World-class education with globally recognized degrees and diverse culture.",
    "High-quality education and diverse culture for international students.",
    "High-quality education and vibrant student life with work opportunities.",
    "World-class education and vibrant multicultural environment for international students",
    "World-class education with globally recognized qualifications.",
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
