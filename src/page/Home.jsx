import Counter from "../Components/Counter";
// import globe from "../../src/assets/UpdatedUIsky-16.svg";
// import globe2 from "../../src/assets/1.svg";

import BlackBtn from "../Utils/BlackBtn";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

// Import flag images
const flags = [
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/union-jack_avutfg.webp",
    country: "UK",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835139/germany_ces0vq.webp",
    country: "Germany",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835142/usa_lhn5ty.webp",
    country: "USA",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835144/canada_aacwta.webp",
    country: "Canada",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835137/ireland_ur0eeq.webp",
    country: "Ireland",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/australia_b0oz6o.webp",
    country: "Australia",
  },
  {
    img: "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835138/newZealand_dkqrdo.jpg",
    country: "New Zealand",
  },
];

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1199 });
  const isTab = window.innerWidth < 575;

  const handleCallButtonClick = () => {
    const phoneNumber = "9605771771";
    if (isMobile) {
      const callLink = document.createElement("a");
      callLink.href = `tel:${phoneNumber}`;
      callLink.click();
    } else {
      const callLink = document.createElement("a");
      callLink.href = `callto:${phoneNumber}`;
      callLink.click();
    }
  };
  return (
    <section
      className="home"
      id="home"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/ds07e7rod/image/upload/v1738835352/UpdatedUIsky-16_yjszlk.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -1rem",
      }}
    >
      <div className="home-content">
        <div className="home-content-top">
          <div className="home-content-top-left">
            <img
              src={
                "https://res.cloudinary.com/ds07e7rod/image/upload/v1738835639/1_dram9q.svg"
              }
              alt="globe"
              className="homeGlobeImage"
            />
          </div>
          <div className="home-content-top-right">
            <div className="home-rightText">
              <span>Your trusted</span>
              <span>study abroad partner</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                textAlign: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div className="home-rightText-btn">
                <BlackBtn
                  style={{
                    padding: isTab ? "8px 12px" : "10px 20px",
                    fontSize: isTab ? "12px" : "16px",
                    backgroundColor: "#244EA2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontWeight: "500",
                    width: isTab ? "100px" : "auto",
                  }}
                  onClick={handleCallButtonClick}
                >
                  Talk to Us
                </BlackBtn>
              </div>
              <div className="home-rightText-btn">
                <BlackBtn
                  style={{
                    padding: isTab ? "8px 12px" : "10px 20px",
                    fontSize: isTab ? "12px" : "16px",
                    backgroundColor: "green",
                    color: "#fff",
                    borderRadius: "50px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: isTab ? "100px" : "auto",
                    fontWeight: "500",
                  }}
                  onClick={() =>
                    window.open("https://wa.me/9605771771", "_blank")
                  }
                >
                  Let&apos;s Chat
                </BlackBtn>
              </div>
            </div>
          </div>
        </div>
        <div className="flags-swiper-container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {flags.map((flag, index) => (
              <SwiperSlide key={index}>
                <div className="flag-slide">
                  <img src={flag.img} alt={flag.country} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="home-content-bottom">
          <Counter />
        </div>
      </div>
    </section>
  );
}
