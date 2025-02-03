import { useRef } from "react";

import img0 from "../../src/assets/About/DSC00692.jpg";
import img1 from "../../src/assets/About/5000andcounting.jpeg";
import img2 from "../../src/assets/About/expandhorizon.png";
import AboutMobLeftContent from "./components/AboutMobLeftContent";
import AboutMobRightContent from "./components/AboutMobRightContent";

const contentOne = {
  title: "The Powerful Team",
  description:
    "Skymark Education thrives on the teamwork, dedication, and passion of its members, each contributing their unique expertise to guide students on their journey abroad. United by a shared vision, we empower students to achieve their dreams, transforming aspirations into achievements and making global education accessible and impactful.",
};
const contentTwo = {
  title: "Five Thousand And Counting",
  description:
    "At Skymark Education, we are proud to have guided over 5,000 students toward their dreams of studying abroad. This achievement reflects our dedication to making global education accessible through expert guidance, personalized support, and unwavering commitment.",
};
const contentThree = {
  title: "Expanding Our Horizons ",
  description:
    "Skymark Education is rapidly expanding, with six branches across Kerala and a presence in Dubai. With ambitious plans for a global network, we empower students worldwide by offering personalized and comprehensive study-abroad solutions, making global education accessible and transformative.",
};
const contentFour = {
  title: "The visionary Founders",
  description:
    "Founded in 2010 by visionaries Raneesh Cherukad and Shafeeque PP, Skymark Education has transformed the study-abroad landscape. Their passion and dedication have made Skymark a trusted global consultancy, empowering thousands of students to achieve their dreams of international education.",
};

export default function AboutMob() {
  const primeRef = useRef(null);

  return (
    <section className="about-mob" id="about">
      <div className="about-scroll-mob-container">
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={contentOne} />
          <AboutMobRightContent refs={primeRef} img={img0} />
        </div>
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={contentTwo} />
          <AboutMobRightContent refs={primeRef} img={img1} />
        </div>
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={contentThree} />
          <AboutMobRightContent refs={primeRef} img={img2} />
        </div>
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={contentFour} />
          <AboutMobRightContent refs={primeRef} img={img0} />
        </div>
      </div>
    </section>
  );
}
