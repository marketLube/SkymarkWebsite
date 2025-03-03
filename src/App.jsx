import { useState, useEffect } from "react";
import Home from "./page/Home";
import Footer from "./Components/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import About from "./page/About";
import StudyIn from "./page/StudyIn";
import ScrollCard from "./page/ScrollCard";
import Testimonial from "./page/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSwiper from "./page/MainSwiper";
import Bottom from "./page/Bottom";
import AboutMob from "./page/AboutMob";
import EnquiryForm from "./Components/EnquiryForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

function App() {
  const [showEnrolled, setShowEnrolled] = useState(true);
  const isMob = window.innerWidth <= 1150;
  const isMobile = useMediaQuery({ maxWidth: 1199 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = documentHeight - window.innerHeight * 0.45;

      const sections = [
        "home",
        "about",
        "country",
        "process",
        "testimonials",
        // "gallery",
        "contact",
        "footer",
      ];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            window.history.pushState(null, null, `#${section}`);
            window.dispatchEvent(new Event("hashchange"));
          }
        }
      });

      if (scrollPosition >= threshold) {
        setShowEnrolled(false);
      } else {
        setShowEnrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8138929049");
  };

  const handleCallClick = () => {
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route
          path="/"
          element={
            <div className="container">
              {showEnrolled && (
                <div className="research-enrolled">
                  1,11,11,131 Students Enrolled
                </div>
              )}
              <Main>
                <Home />
                {isMob ? <AboutMob /> : <About />}
                <StudyIn />
                <ScrollCard />
                <Testimonial />
                <MainSwiper />
                <Bottom />
              </Main>
              <Footer />
            </div>
          }
        />
      </Routes>
      <div className="floating-button-container">
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          <FaWhatsapp size={26} />
        </button>

        <button className="call-button" onClick={handleCallClick}>
          <MdOutlinePhone size={26} />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
