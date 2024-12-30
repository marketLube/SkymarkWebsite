import React, { useEffect, useRef, useState } from "react";
import AboutLeftContent from "./components/AboutLeftContent";
import AboutRIghtContent from "./components/AboutRIghtContent";
import { useInView } from "motion/react";
import img1 from "../../src/assets/About/5000andcounting.jpeg";
import img2 from "../../src/assets/About/expandhorizon.png";

const contentOne = {
  title: "Powerful Compelling Experiences",
  description:
    "  We specialize in helping students achieve their dreams of studying " +
    "abroad through personalized guidance and support. With over a decade " +
    "of experience, our team of dedicated counselors works tirelessly to " +
    "match students with the perfect educational institutions worldwide. We " +
    "handle everything from university applications and visa processing to " +
    "pre-departure orientation, ensuring a smooth transition into " +
    "international education. Our proven track record includes successful",
};
const contentTwo = {
  title: "Expand Our Horizon",
  description:
    "  We specialize in helping students achieve their dreams of studying " +
    "abroad through personalized guidance and support. With over a decade " +
    "of experience, our team of dedicated counselors works tirelessly to " +
    "match students with the perfect educational institutions worldwide. We " +
    "handle everything from university applications and visa processing to " +
    "pre-departure orientation, ensuring a smooth transition into " +
    "international education. Our proven track record includes successful",
};
const contentThree = {
  title: "Counting Our Success",
  description:
    "We specialize in helping students achieve their dreams of studying " +
    "abroad through personalized guidance and support. With over a decade " +
    "of experience, our team of dedicated counselors works tirelessly to " +
    "match students with the perfect educational institutions worldwide. We " +
    "handle everything from university applications and visa processing to " +
    "pre-departure orientation, ensuring a smooth transition into " +
    "international education. Our proven track record includes successful",
};

export default function About() {
  const expandRef = useRef(null);
  const countingRef = useRef(null);
  const primeRef = useRef(null);
  const isExpand = useInView(expandRef, { amount: 1 });
  const isCounting = useInView(countingRef, { amount: 1 });
  const isPrime = useInView(primeRef, { amount: 1 });

  const [content, setContent] = useState(contentOne);

  useEffect(() => {
    if (isExpand) {
      setContent(contentTwo);
    } else if (isCounting) {
      setContent(contentThree);
    } else if (isPrime) {
      setContent(contentOne);
    }
  }, [isExpand, isCounting, isPrime]);

  return (
    <section className="about">
      <div className="about-scroll-container">
        <div className="about-scroll-container-left">
          {isPrime && <AboutLeftContent content={content} />}
          {isExpand && <AboutLeftContent content={content} />}
          {isCounting && <AboutLeftContent content={content} />}
        </div>
        <div className="about-scroll-container-right">
          <AboutRIghtContent refs={primeRef} img={""} />
          <AboutRIghtContent refs={expandRef} img={img1} />
          <AboutRIghtContent refs={countingRef} img={img2} />
        </div>
      </div>
    </section>
  );
}
