import { useMediaQuery } from "react-responsive";
import EnquireSectionOne from "./EnquireSectionOne";
import EnquirySectionTwo from "./EnquireSectionTwo";
import Footer from "./Footer";
import EnQueryMob from "./EnQueryMob";
import Header from "../layout/Header";

function EnquiryForm() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Header />
      <main className="enquary-content">
        {isMobile ? <EnQueryMob /> : <EnquireSectionOne />}
        <EnquirySectionTwo />
        <Footer />
      </main>
      <div className="enquary-bottomDiv">
        <img src={GlobeSec} alt="logo" className="enquary-respoImg" />
        <div className="enquary-mobile-text">
          <div style={{ width: "fit-content" }}>Start your</div>
          <div style={{ width: "fit-content" }}>global career</div>
          <div style={{ width: "fit-content" }}>today</div>
        </div>
        <img
          src={Flags}
          alt="flags"
          className="enquary-flagRowRespo"
          style={{ marginBottom: "2rem" }}
        />
      </div>
    </div>
  );
}

export default EnquiryForm;
