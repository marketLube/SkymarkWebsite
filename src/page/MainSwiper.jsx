import React from "react";
import Slider from "react-slick/lib/slider";

export default function MainSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    arrows: false,
    centerPadding: "20px",

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
    <seciton>
      <div className="main-swiper">
        <div className="main-swiper-container">
          <Slider {...settings}>
            <div className="testmonial-body-item">
              <span>1</span>
            </div>
            <div className="testmonial-body-item">
              <span>2</span>
            </div>
            <div className="testmonial-body-item">
              <span>3</span>
            </div>
            <div className="testmonial-body-item">
              <span>4</span>
            </div>
            <div className="testmonial-body-item">
              <span>5</span>
            </div>
          </Slider>
        </div>
      </div>
    </seciton>
  );
}
