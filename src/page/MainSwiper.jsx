import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function MainSwiper() {
  const swiperRef = React.useRef(null);

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

  return (
    <div>
      <div className="main-swiper">
        <div className="main-swiper-container">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={1000}
            touchRatio={1.5}
            touchAngle={45}
            grabCursor={true}
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
                slidesPerView: 3.5,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiper-body-item">
                <span>
                  <iframe
                    className="youtube-player"
                    src="https://www.youtube.com/embed/uBDbrr6cjPE?enablejsapi=1"
                    title="Frame 1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                  />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body-item">
                <span>
                  <iframe
                    className="youtube-player"
                    src="https://www.youtube.com/embed/unR5vDRuLj4?enablejsapi=1"
                    title="Frame 2"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                  />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body-item">
                <span>
                  <iframe
                    className="youtube-player"
                    src="https://www.youtube.com/embed/xcGU-1FB_kA?enablejsapi=1"
                    title="Frame 3"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                  />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body-item">
                <span>
                  <iframe
                    className="youtube-player"
                    src="https://www.youtube.com/embed/dGU52bhgI7M?enablejsapi=1"
                    title="Frame 4"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                  />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body-item">
                <span>
                  <iframe
                    className="youtube-player"
                    src="https://www.youtube.com/embed/BOuXCyMuVCs?enablejsapi=1"
                    title="Frame 5"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                  />
                </span>
              </div>
            </SwiperSlide>
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
            marginTop: "3rem",
            paddingTop: "0rem",
          }}
        >
          Guiding Success Stories Worldwide.
        </h1>
      )}
    </div>
  );
}
