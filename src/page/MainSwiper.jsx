import React, { useEffect } from "react";
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
    cssEase: "linear",
    centerMode: true,
    arrows: false,
    centerPadding: "20px",
    pauseOnHover: true,
    draggable: true,
    swipe: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          speed: 500,
          autoplay: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.5,
          centerMode: true,
          speed: 500,
          autoplay: false,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          speed: 500,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          centerMode: true,
          speed: 500,
          autoplay: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.6,
          centerMode: true,
          speed: 500,
          autoplay: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          speed: 500,
          autoplay: false,
        },
      },
    ],
  };

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
              events: {
                onStateChange: (event) => {
                  if (event.data === YT.PlayerState.PLAYING) {
                    players.forEach((player, idx) => {
                      if (idx !== index && player.pauseVideo) {
                        player.pauseVideo();
                      }
                    });
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
  return (
    <div>
      <div className="main-swiper">
        <div className="main-swiper-container">
          <Slider {...settings}>
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
          </Slider>
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
