import { useMediaQuery } from "react-responsive";
import EnquireSectionOne from "./EnquireSectionOne";
import EnquirySectionTwo from "./EnquireSectionTwo";
import Footer from "./Footer";
import Header from "../layout/Header";
import EnQueryMob from "./EnQueryMob";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

function EnquiryForm() {
  const isMobile = useMediaQuery({ maxWidth: 1199 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <>
      {/* <Header /> */}
      <main className="enquary-content">
        {isMobile ? <EnQueryMob /> : <EnquireSectionOne />}
        <EnquirySectionTwo />
      </main>
      <Footer />

      <div className="floating-button-container">
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          <FaWhatsapp size={26} />
        </button>

        <button className="call-button" onClick={handleCallClick}>
          <MdOutlinePhone size={26} />
        </button>
      </div>
    </>
  );
}

export default EnquiryForm;
