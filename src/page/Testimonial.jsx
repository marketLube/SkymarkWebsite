import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../src/assets/Testimonials/one.jpeg";
import img2 from "../../src/assets/Testimonials/two.jpeg";
import img3 from "../../src/assets/Testimonials/three.jpeg";
import img4 from "../../src/assets/Testimonials/four.jpeg";
import img5 from "../../src/assets/Testimonials/five.jpeg";
// import img6 from "../../src/assets/Testimonials/six.jpeg";
import img7 from "../../src/assets/Testimonials/seven.jpeg";
import img8 from "../../src/assets/Testimonials/eight.jpeg";
import img9 from "../../src/assets/Testimonials/nine.jpeg";
import img10 from "../../src/assets/Testimonials/ten.jpeg";
import img11 from "../../src/assets/Testimonials/eleven.jpeg";
import img12 from "../../src/assets/Testimonials/twelve.jpeg";
import img13 from "../../src/assets/Testimonials/13.jpeg";
import img14 from "../../src/assets/Testimonials/14.jpeg";
import img15 from "../../src/assets/Testimonials/15.jpeg";
import img16 from "../../src/assets/Testimonials/16.jpeg";
import img17 from "../../src/assets/Testimonials/17.jpeg";
// import img18 from "../../src/assets/Testimonials/18.jpeg";
import img19 from "../../src/assets/Testimonials/19.jpeg";
import img20 from "../../src/assets/Testimonials/20.jpeg";
import img21 from "../../src/assets/Testimonials/21.jpeg";

const imgArray = [
  img1,
  img2,
  img3,
  img4,
  img5,
  // img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  // img18,
  img19,
  img20,
  img21,
];

const titleArray = [
  "They truly care about their students’ success.",
  "I’m now pursuing my master’s abroad, all thanks to Skymark",
  "Skymark’s professionalism and dedication were outstanding.",
  "Skymark’s counselors were always available to answer my questions",
  "Skymark changed my life truly.",
  "Thanks to their help, I got my admission and visa without any hassle.",
  "I’m now studying abroad at my dream university.",

  "I’m now studying in UK, Thank you Skymark.",
];

export default function Testimonial() {
  const [isPaused, setIsPaused] = useState(false);

  const swiperSettingsRightToLeft = {
    modules: [Autoplay],
    slidesPerView: 3,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      300: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      380: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },

      480: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      870: {
        slidesPerView: 3.5,
        spaceBetween: 25,
      },

      944: {
        slidesPerView: 3.5,
        spaceBetween: 28,
      },

      1025: {
        slidesPerView: 3.9,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },

      1350: {
        slidesPerView: 5,
        spaceBetween: 30,
      },

      1560: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  };
  const swiperSettingsLeftToRight = {
    ...swiperSettingsRightToLeft,
    autoplay: {
      ...swiperSettingsRightToLeft.autoplay,
      reverseDirection: true,
    },
  };

  const [title, setTitle] = useState(titleArray[0]);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  let i = 1;

  useEffect(() => {
    if (isMouseEnter) return;
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setTitle(titleArray[i]);
        setFadeIn(true);
        i++;
        if (i === titleArray.length) {
          i = 0;
        }
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMouseEnter]);

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
  };

  const handleSliderHover = (swiper, isHovered) => {
    if (isHovered) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
    setIsPaused(isHovered);
  };

  return (
    <section className="testmonial">
      <div className="testmonial-head">
        <h2 className={`title-animate ${fadeIn ? "fade-in" : "fade-out"}`}>
          {`"${title}"`}
        </h2>
      </div>

      <div className="testimonial-slider">
        <Swiper
          {...swiperSettingsRightToLeft}
          onMouseEnter={(swiper) => handleSliderHover(swiper, true)}
          onMouseLeave={(swiper) => handleSliderHover(swiper, false)}
          onTouchStart={(swiper) => handleSliderHover(swiper, true)}
          onTouchEnd={(swiper) => handleSliderHover(swiper, false)}
        >
          {imgArray.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="slide-item">
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  style={{
                    height:
                      window.innerWidth <= 450
                        ? "170px"
                        : window.innerWidth <= 868
                        ? "200px"
                        : "270px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="testimonial-slider">
        <Swiper
          {...swiperSettingsLeftToRight}
          onMouseEnter={(swiper) => handleSliderHover(swiper, true)}
          onMouseLeave={(swiper) => handleSliderHover(swiper, false)}
          onTouchStart={(swiper) => handleSliderHover(swiper, true)}
          onTouchEnd={(swiper) => handleSliderHover(swiper, false)}
        >
          {imgArray.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="slide-item">
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  style={{
                    height:
                      window.innerWidth <= 450
                        ? "170px"
                        : window.innerWidth <= 868
                        ? "200px"
                        : "270px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
