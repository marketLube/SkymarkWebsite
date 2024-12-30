import React from "react";
import Slider from "react-slick/lib/slider";

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

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "ease-in-out",
    centerMode: true,
    arrows: false,
    pauseOnHover: true,

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
          {imgArray.slice(0, 10).map((item, index) => (
            <div className="testmonial-body-item" key={index}>
              <span>
                <img src={item} alt="testimonial" />
              </span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="testmonial-body">
        <Slider {...settings} rtl={true}>
          {imgArray.slice(10, 21).map((item, index) => (
            <div className="testmonial-body-item" key={index}>
              <span>
                <img src={item} alt="testimonial" />
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
