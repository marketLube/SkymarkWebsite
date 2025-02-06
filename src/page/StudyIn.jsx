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
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/union-jack_avutfg.webp";
const img2 =
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835139/germany_ces0vq.webp";

const img3 =
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835142/usa_lhn5ty.webp";

const img4 =
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835144/canada_aacwta.webp";

const img5 =
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835137/ireland_ur0eeq.webp";

const img6 =
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/australia_b0oz6o.webp";
const img7 =
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/newZealand_dkqrdo.jpg";

export default function StudyIn() {
  const [headingText, setHeadingText] = useState("United Kingdom");

  const [paraText, setParaText] = useState(
    "High-quality education and diverse cultural experiences for students."
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
    setAnimate(true);

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
        <div className={`research-head ${animate ? "animate" : ""}`}>
          {headingText}
        </div>
        <p className={`research-para ${animate ? "animate" : ""}`}>
          {paraText}
        </p>
        <div className="research-bttn">
          <img src={flag} alt="flag" style={{ borderRadius: "0.5rem" }} />
        </div>
        <div className="research-scrol-bg">
          <img
            src="https://res.cloudinary.com/ds07e7rod/image/upload/v1738836028/UpdatedUIsky-17_yq8hmj.svg"
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
}
