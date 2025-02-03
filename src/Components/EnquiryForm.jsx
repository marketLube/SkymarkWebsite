import { useMediaQuery } from "react-responsive";
import EnquireSectionOne from "./EnquireSectionOne";
import EnquirySectionTwo from "./EnquireSectionTwo";
import Footer from "./Footer";
import Header from "../layout/Header";
import EnQueryMob from "./EnQueryMob";

function EnquiryForm() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  console.log(isMobile, "isMobile");

  return (
    <>
      <Header />
      <main className="enquary-content">
        <EnquireSectionOne />
        {isMobile ? <EnQueryMob /> : <EnquirySectionTwo />}
      </main>
      <Footer />
    </>
  );
}

export default EnquiryForm;
