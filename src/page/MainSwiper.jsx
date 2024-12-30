import React from "react";
import Slider from "react-slick/lib/slider";

export default function MainSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    centerMode: true,
    arrows: false,
    centerPadding: "20px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section>
      <div className="main-swiper">
        <div className="main-swiper-container">
          <Slider {...settings}>
            <div className="testmonial-body-item">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/uBDbrr6cjPE"
                  title="Frame 1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </span>
            </div>
            <div className="testmonial-body-item">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/unR5vDRuLj4"
                  title="Frame 2"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </span>
            </div>
            <div className="testmonial-body-item">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/xcGU-1FB_kA"
                  title="Frame 3"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </span>
            </div>
            <div className="testmonial-body-item">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/dGU52bhgI7M"
                  title="Frame 4"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </span>
            </div>
            <div className="testmonial-body-item">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/BOuXCyMuVCs"
                  title="Frame 5"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                />
              </span>
            </div>
          </Slider>
        </div>
      </div>
      <h1
        className="main-text"
        style={{
          fontSize: "3rem",
          fontWeight: "500",
          color: "#024060",
          textAlign: "center",
          height: "8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Guiding Success Stories Worldwide.
      </h1>
    </section>
  );
}
