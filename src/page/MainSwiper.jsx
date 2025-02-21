import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function MainSwiper() {
  const swiperRef = React.useRef(null);
  const [visibleSlides, setVisibleSlides] = React.useState([0]);

  const videos = [
    { id: "uBDbrr6cjPE", title: "Frame 1" },
    { id: "unR5vDRuLj4", title: "Frame 2" },
    { id: "xcGU-1FB_kA", title: "Frame 3" },
    { id: "dGU52bhgI7M", title: "Frame 4" },
    { id: "BOuXCyMuVCs", title: "Frame 5" },
  ];

  const isTab = window.innerWidth < 998;
  const isMobile = window.innerWidth < 768;

  const updateVisibleSlides = (swiper) => {
    const slidesPerView = swiper.params.slidesPerView;
    const currentIndex = swiper.realIndex;
    const visibleIndexes = [];

    for (let i = 0; i < Math.ceil(slidesPerView); i++) {
      const index = (currentIndex + i) % videos.length;
      visibleIndexes.push(index);
    }
    setVisibleSlides(visibleIndexes);
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div id="gallery">
      {window.location.pathname !== "/enquiry" && (
        <h2 className="main-swiper-h2">Why Choose Skymark ?</h2>
      )}
      <div className="main-swiper">
        <div className="main-swiper-container">
          <button
            className="swiper-nav-btn prev"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateVisibleSlides(swiper);
            }}
            onSlideChange={(swiper) => {
              updateVisibleSlides(swiper);
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={1000}
            touchRatio={1.5}
            touchAngle={45}
            autoplay={
              !isMobile && {
                delay: 1500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                stopOnLastSlide: false,
              }
            }
            breakpoints={{
              500: {
                slidesPerView: 1.6,
              },
              575: {
                slidesPerView: 1.6,
              },
              768: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 2.5,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: ".swiper-nav-btn.prev",
              nextEl: ".swiper-nav-btn.next",
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <div className="swiper-body-item">
                  <span>
                    {visibleSlides.includes(index) ? (
                      <iframe
                        className="youtube-player"
                        src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                        title={video.title}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className="youtube-thumbnail"
                        style={{
                          backgroundImage: `url(https://img.youtube.com/vi/${video.id}/maxresdefault.jpg)`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-nav-btn next"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {!isTab && (
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
            // marginTop: "3rem",
            paddingTop: "0rem",
          }}
        >
          Guiding Success Stories Worldwide.
        </h1>
      )}
    </div>
  );
}
