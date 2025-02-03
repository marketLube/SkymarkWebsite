import { transform } from "motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setIsChecked] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    const preventScroll = (e) => {
      if (checked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (checked) {
      document.body.style.overflow = "hidden";
      // Add wheel and touchmove event listeners
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [checked]);

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    navigate("/enquiry");
  };

  const handleScrollToSection = (sectionId) => {
    const targetId = sectionId.startsWith("#")
      ? sectionId.substring(1)
      : sectionId;

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: targetId },
        replace: true,
      });
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      setIsChecked(false);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    window.open("https://wa.me/+919876543210", "_blank");
  };

  const isEnquiryPage = location.pathname === "/enquiry";

  const navigationItems = isEnquiryPage ? (
    <>
      <li className="navigation__item">
        <a
          href="#about"
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("process");
          }}
        >
          Process
        </a>
      </li>
      <li className="navigation__item">
        <a
          href="/"
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
          }}
        >
          Events
        </a>
      </li>
      <li className="navigation__item">
        <a
          href="#contact"
          className="navigation__link"
          onClick={handleWhatsAppRedirect}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <button
          onClick={handleEnquiryClick}
          style={{
            background: "#244EA2",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "18px",
            cursor: "pointer",
            fontSize: ".9rem",
          }}
        >
          Login
        </button>
      </li>
    </>
  ) : (
    <>
      <li className="navigation__item">
        <a
          href="#process"
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("process");
          }}
        >
          Process
        </a>
      </li>
      <li className="navigation__item">
        <a
          href="#about"
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
          }}
        >
          Events
        </a>
      </li>
      <li className="navigation__item">
        <a
          href="#contact"
          className="navigation__link"
          onClick={handleWhatsAppRedirect}
        >
          Contact
        </a>
      </li>
      <li className="navigation__item">
        <button
          onClick={handleEnquiryClick}
          style={{
            background: "#244EA2",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "18px",
            cursor: "pointer",
            fontSize: ".9rem",
            fontWeight: "500",
            letterSpacing: "2px",
          }}
        >
          Register
        </button>
      </li>
    </>
  );

  const desktopNavItems = isEnquiryPage ? (
    <>
      <li className="nav-item">
        <a
          href="#process"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("process");
          }}
        >
          Process
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
          }}
        >
          Events
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={handleWhatsAppRedirect}>
          Contact
        </a>
      </li>
      <li className="nav-item">
        <button
          onClick={handleEnquiryClick}
          style={{
            background: "#244EA2",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "18px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Register
        </button>
      </li>
    </>
  ) : (
    <>
      <li className="nav-item">
        <a
          href="#process"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("process");
          }}
        >
          Process
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
          }}
        >
          Events
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={handleWhatsAppRedirect}>
          Contact
        </a>
      </li>
      <li className="nav-item">
        <button
          onClick={handleEnquiryClick}
          style={{
            background: "#244EA2",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "18px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Register
        </button>
      </li>
    </>
  );

  return (
    <header className="header">
      <nav>
        <div
          className="logo"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://skymark.in/web/assets/images/svg/skymarkLogo.svg"
            alt="Logo of the website"
          />
        </div>

        <div className="navigation">
          <input
            checked={checked}
            onChange={() => setIsChecked((prev) => !prev)}
            type="checkbox"
            className="navigation__checkbox"
            id="navi__toggle"
            aria-label="Toggle navigation"
          />
          <label
            htmlFor="navi__toggle"
            className="navigation__btn"
            aria-controls="navigationMenu"
          >
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <nav
            className="navigation__nav"
            id="navigationMenu"
            aria-label="Main navigation"
          >
            <ul className="navigation__list">{navigationItems}</ul>
          </nav>
        </div>

        <ul className="nav-list">{desktopNavItems}</ul>
      </nav>
    </header>
  );
}

export default Header;
