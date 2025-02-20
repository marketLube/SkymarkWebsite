import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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

  useEffect(() => {
    let players = [];
    if (typeof window !== "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        document
          .querySelectorAll(".youtube-player")
          .forEach((iframe, index) => {
            players[index] = new YT.Player(iframe, {
              playerVars: {
                autoplay: 0,
                controls: 1,
                rel: 0,
                modestbranding: 1,
              },
              events: {
                onReady: (event) => {
                  event.target.pauseVideo();
                },
                onStateChange: (event) => {
                  if (event.data === YT.PlayerState.PLAYING) {
                    // Pause other videos
                    players.forEach((player, idx) => {
                      if (idx !== index && player.pauseVideo) {
                        player.pauseVideo();
                      }
                    });
                    // Stop swiper autoplay
                    swiperRef.current?.autoplay?.stop();
                  } else if (
                    event.data === YT.PlayerState.PAUSED ||
                    event.data === YT.PlayerState.ENDED
                  ) {
                    // Resume swiper autoplay
                    swiperRef.current?.autoplay?.start();
                  }
                },
              },
            });
          });
      };
    }

    return () => {
      players = [];
    };
  }, []);

  const isTab = window.innerWidth < 998;
  const isMobile = window.innerWidth < 768;

  const updateVisibleSlides = (swiper) => {
    const slidesPerView = swiper.params.slidesPerView;
    const currentIndex = swiper.realIndex;
    const visibleIndexes = [];

    // Calculate visible slide indexes based on slidesPerView
    for (let i = 0; i < Math.ceil(slidesPerView); i++) {
      const index = (currentIndex + i) % videos.length;
      visibleIndexes.push(index);
    }
    setVisibleSlides(visibleIndexes);
  };

  return (
    <div>
      {window.location.pathname !== "/enquiry" && (
        <h2 className="main-swiper-h2">Why Choose Skymark ?</h2>
      )}
      <div
        className="main-swiper"
        //  id="gallery"
      >
        <div className="main-swiper-container">
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
            // grabCursor={true}
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
