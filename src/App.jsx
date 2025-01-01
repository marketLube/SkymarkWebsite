import { useState } from "react";
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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const isMob = window.innerWidth <= 1250;
  return (
    <>
      {isFormOpen ? (
        <EnquiryForm setIsFormOpen={setIsFormOpen} />
      ) : (
        <div className="container">
          <Header setIsFormOpen={setIsFormOpen} />
          <div className="research-enrolled">1,11,11,131 Students Enrolled</div>
          <Main>
            <Home></Home>
            {isMob ? <AboutMob /> : <About></About>}
            <StudyIn></StudyIn>
            <ScrollCard></ScrollCard>
            <Testimonial></Testimonial>
            <MainSwiper />
            <Bottom />
          </Main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
