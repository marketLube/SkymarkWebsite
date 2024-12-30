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

function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <Home></Home>
        <About></About>
        <StudyIn></StudyIn>
        <ScrollCard></ScrollCard>
        <Testimonial></Testimonial>
        <MainSwiper />
        <Bottom />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
