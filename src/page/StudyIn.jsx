import React, { useEffect, useState, useRef } from "react";
import BlackBtn from "../Utils/BlackBtn";
// import img1 from "../assets/Flags/uk.png";
// import img2 from "../assets/Flags/germany.png";
// import img3 from "../assets/Flags/us.png";
// import img4 from "../assets/Flags/canada.png";
// import img5 from "../assets/Flags/ireland.png";
// import img6 from "../assets/Flags/australia.png";
// import img7 from "../assets/Flags/newzeland.png";

const img1 =
  "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg";
const img2 =
  "https://cdn.pixabay.com/photo/2016/10/30/17/39/germany-flag-1783774_1280.png";

const img3 =
  "https://cdn.pixabay.com/photo/2012/04/12/23/52/usa-31021_1280.png";

const img4 =
  "https://cdn.pixabay.com/photo/2012/04/10/23/27/canada-27003_1280.png";

const img5 =
  "https://cdn.pixabay.com/photo/2012/04/10/23/11/ireland-26887_1280.png";

const img6 =
  "https://cdn.pixabay.com/photo/2012/04/11/15/43/australia-28586_1280.png";
const img7 =
  "https://img.freepik.com/free-vector/illustration-new-zealand-flag_53876-27119.jpg?t=st=1735732573~exp=1735736173~hmac=f21070393e8c99d91b1b5d5c9d5081176879438426d78a59f8ab63a78956eb70&w=2000";

export default function StudyIn() {
  const [headingText, setHeadingText] = useState("United Kingdom");
  const [paraText, setParaText] = useState(
    "Look for grammar, spelling mistakes, and make sure you proper nouns. A paragraph three parts:"
  );
  const [flag, setFlag] = useState(img1);

  const [animate, setAnimate] = useState(true); // State to trigger animation

  const containerRef = useRef(null);
  const lastScrollTime = useRef(0);
  const lastIndex = useRef(0);

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

  const flagArr = [img1, img2, img3, img4, img5, img6, img7];

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
          setFlag(flagArr[index]);
          setAnimate(false); // Reset animation state
          setTimeout(() => setAnimate(true), 0);
        }
      } else {
        if (lastIndex.current !== 0) {
          lastIndex.current = 0;
          setHeadingText(textArray[0]);
          setParaText(paraArray[0]);
          setFlag(flagArr[0]);
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
  }, [flagArr, paraArray, textArray]);

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
          <img src={flag} alt="flag" />
        </div>
        <div className="research-scrol-bg">
          <img src="/UpdatedUIsky-17.svg" alt="bg" />
        </div>
      </div>
    </div>
  );
}
