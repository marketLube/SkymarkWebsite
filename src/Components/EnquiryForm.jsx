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
        <EnquireSectionOne />
        <EnquirySectionTwo />
      </main>
      <Footer />
    </>
  );
}

export default EnquiryForm;
