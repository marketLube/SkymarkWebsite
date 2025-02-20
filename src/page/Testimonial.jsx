import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const imgArray = [
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833488/one_npdqdu.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833554/two_rtipd4.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833531/three_sgzttu.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833488/four_xjgjc2.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833488/five_emzxnx.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833489/seven_fz7zdk.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833488/eight_v49rdv.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833488/nine_ke1ayg.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833489/ten_ycalyf.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833488/eleven_hi4xku.jpg",
];

const imgArray2 = [
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833553/twelve_bb9vnv.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833556/13_knvjaw.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833556/14_j8a94n.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833487/15_bermzu.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833486/16_bldx9b.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833487/17_zonapn.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833487/19_lw6jtf.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833487/20_he09ih.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1738833492/21_xtrmmp.jpg",
];

const titleArray = [
  "They truly care about their student's success.",
  "I'm now pursuing my master's abroad, all thanks to Skymark",
  "Skymark's professionalism and dedication were outstanding.",
  "Skymark's counselors were always available to answer my questions",
  "Skymark changed my life truly.",
  "Thanks to their help, I got my admission and visa without any hassle.",
  "I'm now studying abroad at my dream university.",
  "I'm now studying in UK, Thank you Skymark.",
];

export default function Testimonial() {
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const [title, setTitle] = useState(titleArray[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const rotateTitle = () => {
      setFadeIn(false);

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % titleArray.length;
        setTitle(titleArray[currentIndex]);
        setFadeIn(true);
      }, 300);
    };

    const intervalId = setInterval(rotateTitle, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnterFirst = () => {
    if (swiper1) swiper1.autoplay.stop();
  };

  const handleMouseLeaveFirst = () => {
    if (swiper1) swiper1.autoplay.start();
  };

  const handleMouseEnterSecond = () => {
    if (swiper2) swiper2.autoplay.stop();
  };

  const handleMouseLeaveSecond = () => {
    if (swiper2) swiper2.autoplay.start();
  };

  const swiperSettingsRightToLeft = {
    modules: [Autoplay],
    slidesPerView: 3,
    loop: true,
    speed: 3000,
    autoplay:
      window.innerWidth > 768
        ? {
            delay: 1,
          }
        : false,
    onSwiper: setSwiper1,
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
    autoplay:
      window.innerWidth > 768
        ? {
            delay: 1,
            reverseDirection: true,
          }
        : false,
    onSwiper: setSwiper2,
  };

  return (
    <section className="testmonial" id="testimonials">
      <div className="testmonial-head">
        <h2 className={`title-animate ${fadeIn ? "fade-in" : "fade-out"}`}>
          {`"${title}"`}
        </h2>
      </div>

      <div
        className="testimonial-slider"
        onMouseEnter={handleMouseEnterFirst}
        onMouseLeave={handleMouseLeaveFirst}
      >
        <Swiper style={{ cursor: "pointer" }} {...swiperSettingsRightToLeft}>
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
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="testimonial-slider"
        onMouseEnter={handleMouseEnterSecond}
        onMouseLeave={handleMouseLeaveSecond}
      >
        <Swiper {...swiperSettingsLeftToRight}>
          {imgArray2.map((image, index) => (
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
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
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
