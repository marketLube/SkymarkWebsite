import { useMediaQuery } from "react-responsive";
import EnquireSectionOne from "./EnquireSectionOne";
import EnquirySectionTwo from "./EnquireSectionTwo";
import Footer from "./Footer";
import EnQueryMob from "./EnQueryMob";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

function EnquiryForm() {
  const isMobile = useMediaQuery({ maxWidth: 1199 });

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
    <>
      {/* <Header /> */}
      <main className="enquary-content" style={{ overflowX: "hidden" }}>
        {isMobile ? <EnQueryMob /> : <EnquireSectionOne />}
        <EnquirySectionTwo />
        <Footer />
      </main>

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
