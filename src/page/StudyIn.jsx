import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StudyIn() {
  const countries = [
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/union-jack_avutfg.webp",
      country: "UK",
      heading:
        "High-quality education and diverse cultural experiences for students.",
    },
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835139/germany_ces0vq.webp",
      country: "Germany",
      heading:
        "World-class education with low or no tuition fees for students.",
    },
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835142/usa_lhn5ty.webp",
      country: "USA",
      heading:
        "World-class education with globally recognized degrees and diverse culture.",
    },
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835144/canada_aacwta.webp",
      country: "Canada",
      heading:
        "High-quality education and diverse culture for international students.",
    },
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835137/ireland_ur0eeq.webp",
      country: "Ireland",
      heading:
        "High-quality education and vibrant student life with work opportunities.",
    },
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/australia_b0oz6o.webp",
      country: "Australia",
      heading:
        "World-class education and vibrant multicultural environment for international students",
    },
    {
      img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/newZealand_dkqrdo.jpg",
      country: "New Zealand",
      heading: "World-class education with globally recognized qualifications.",
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFlagsTransform = () => {
    if (screenWidth < 575) {
      return [
        `calc(50vw - ${100 / 2.5}vw)`,
        `calc(-${(countries.length - 1.3) * (100 / 2.1)}vw)`,
      ];
    } else if (screenWidth < 768) {
      return [
        `calc(50vw - ${100 / 1.5 / 2}vw)`,
        `calc(-${(countries.length - 3) * (100 / 1.5)}vw)`,
      ];
    } else if (screenWidth < 800) {
      return [
        `calc(50vw - ${100 / 2.5 / 2}vw)`,
        `calc(-${(countries.length - 1.4) * (100 / 2.5)}vw)`,
      ];
    } else if (screenWidth < 1024) {
      return [
        `calc(50vw - ${100 / 2.5 / 2}vw)`,
        `calc(-${(countries.length - 1.8) * (100 / 2.5)}vw)`,
      ];
    } else if (screenWidth < 1200) {
      return [
        `calc(50vw - ${100 / 3 / 2}vw)`,
        `calc(-${(countries.length - 1) * (100 / 3)}vw)`,
      ];
    }
    return [
      `calc(50vw - ${100 / 4 / 2}vw)`,
      `calc(-${(countries.length - 1.5) * (100 / 4)}vw)`,
    ];
  };

  const flagsX = useTransform(scrollYProgress, [0, 1], getFlagsTransform());

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionHeight = 1 / countries.length;
      const currentIndex = Math.min(
        countries.length - 1,
        Math.max(0, Math.floor(latest / sectionHeight))
      );
      setActiveIndex(currentIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, countries.length]);

  return (
    <div
      ref={containerRef}
      className="researchNew"
      style={{ height: `${countries.length * 50}vh` }}
      id="country"
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="researchNew-container">
          <motion.div className="researchNew-header">
            <h2>{countries[activeIndex].heading}</h2>
          </motion.div>

          <div className="researchNew-flags-wrapper">
            <motion.div className="researchNew-flags" style={{ x: flagsX }}>
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  className={`country-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <img src={country.img} alt={`${country.country} flag`} />
                  <p>{country.country}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
