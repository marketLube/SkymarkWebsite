import React from "react";
import Slider from "react-slick/lib/slider";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
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
        settings: { slidesToShow: 1.2 },
      },
    ],
  };

  return (
    <section className="testmonial">
      <div className="testmonial-head">
        <h2>{`"Skymark Has Changed My Life"`}</h2>
      </div>
      <div className="testmonial-body">
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
      <div className="testmonial-body">
        <Slider {...settings} rtl={true}>
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
        </Slider>
      </div>
    </section>
  );
}
