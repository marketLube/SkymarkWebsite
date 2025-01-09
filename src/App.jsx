import { useState, useEffect } from "react";
import Home from "./page/Home";
import Footer from "./layout/Footer";
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
  console.log(showEnrolled, "ajfshgsjvssfsksk");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = documentHeight - window.innerHeight * 0.4;

      if (scrollPosition >= threshold) {
        setShowEnrolled(false);
      } else {
        setShowEnrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
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
