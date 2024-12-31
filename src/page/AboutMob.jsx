import React, { useEffect, useRef, useState } from "react";

import img0 from "../../src/assets/About/DSC00692.jpg";
import img1 from "../../src/assets/About/5000andcounting.jpeg";
import img2 from "../../src/assets/About/expandhorizon.png";
import AboutMobLeftContent from "./components/AboutMobLeftContent";
import AboutMobRightContent from "./components/AboutMobRightContent";

const contentOne = {
  title: "The Powerful Team: All Skymark Team ",
  description:
    "Skymark Education’s remarkable success is deeply rooted in the teamwork, dedication, and passion of its members. Each individual contributes their unique expertise and energy, ensuring that students receive unparalleled guidance on their journey to study abroad. Our collective commitment to empowering students and helping them achieve their dreams fosters an environment of excellence. Together, we transform aspirations into achievements, driven by a shared vision of making global education accessible and impactful.",
};
const contentTwo = {
  title: "Five Thousand And Counting",
  description:
    "At Skymark Education, we take immense pride in having guided over 5,000 students toward achieving their dreams of studying abroad. This milestone reflects our unwavering commitment, teamwork, and passion for making global education accessible. Every success story inspires us to continue providing expert guidance, personalized support, and end-to-end assistance. Together, we empower students to unlock opportunities and build a brighter future through international education.",
};
const contentThree = {
  title: "Expanding Our Horizons ",
  description:
    "Skymark Education is growing exponentially, with over six branches across Kerala and a strong presence in Dubai. Our ambitious expansion plans aim to create a global network, empowering students worldwide with transformative educational opportunities. By combining local expertise with international reach, we ensure unparalleled support for aspiring learners. Skymark’s vision is to make global education accessible, guiding students toward brighter futures through personalized and comprehensive study-abroad solutions.",
};
const contentFour = {
  title: "The visionary Founders",
  description:
    "Skymark Education was brought to life by a team of visionary founders, including Raneesh Cherukad & Shafeeque PP, who shared a passion for transforming the study-abroad landscape. Their forward-thinking approach and dedication to empowering students have been the driving force behind Skymark’s success since its inception in 2010. Through their leadership, Skymark has grown into a trusted global education consultancy, helping thousands of students achieve their dreams of international education.",
};

export default function AboutMob() {
  const primeRef = useRef(null);
  const [content, setContent] = useState(contentOne);

  return (
    <section className="about-mob">
      <div className="about-scroll-mob-container">
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={content} />
          <AboutMobRightContent refs={primeRef} img={img0} />
        </div>
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={content} />
          <AboutMobRightContent refs={primeRef} img={img0} />
        </div>
        <div className="about-scroll-mob-container-item">
          <AboutMobLeftContent content={content} />
          <AboutMobRightContent refs={primeRef} img={img0} />
        </div>
      </div>
    </section>
  );
}
