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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showEnrolled, setShowEnrolled] = useState(true);
  const isMob = window.innerWidth <= 1150;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = documentHeight - window.innerHeight * 0.45;

      if (scrollPosition >= threshold) {
        setShowEnrolled(false);
      } else {
        setShowEnrolled(true);
      }

      // const sections = [
      //   "home",
      //   "about",
      //   "process",
      //   "testimonials",
      //   "gallery",
      //   "contact",
      // ];
      // const currentPosition = window.scrollY + window.innerHeight / 2;

      // for (const section of sections) {
      //   const element = document.getElementById(section);
      //   if (element) {
      //     const { top, bottom } = element.getBoundingClientRect();
      //     const elementPosition = window.scrollY + top;

      //     if (
      //       currentPosition >= elementPosition &&
      //       currentPosition <= window.scrollY + bottom
      //     ) {
      //       window.location.hash = section;
      //       break;
      //     }
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    </BrowserRouter>
  );
}

export default App;
