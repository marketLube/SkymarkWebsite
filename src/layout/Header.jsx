import { transform } from "motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setIsChecked] = useState(false);

  // Handle scrolling after navigation to home page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // Add a small delay to ensure the DOM is ready
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    navigate("/enquiry");
  };

  const handleScrollToSection = (sectionId) => {
    // Remove the '#' if it's included in the sectionId
    const targetId = sectionId.startsWith("#")
      ? sectionId.substring(1)
      : sectionId;

    // If we're not on the home page, navigate home first with the section in state
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: targetId },
        replace: true, // Use replace to avoid adding to history stack
      });
      return;
    }

    // If we're already on home page, just scroll
    const section = document.getElementById(targetId);
    if (section) {
      setIsChecked(false); // Close mobile menu if open
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
          href="/"
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("contact");
          }}
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
          }}
        >
          Register
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
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("contact");
          }}
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
            fontSize: "1.1rem",
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
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("contact");
          }}
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
            fontSize: "1.1rem",
            fontWeight: "500",
            letterSpacing: "2px",
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
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("contact");
          }}
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
          }}
        >
          Register
        </button>
      </li>
    </>
  );

  return (
    <header
      className="header"
      style={isEnquiryPage ? { marginLeft: "-20px" } : undefined}
    >
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
{
  /* <li className="navigation__item">
  <button
    onClick={handleEnquiryClick}
    style={{
      background: "#244EA2",
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "18px",
      cursor: "pointer",
      fontSize: "1.1rem",
      fontWeight: "500",
      letterSpacing: "2px",
    }}
  >
    Register
  </button>
</li>; */
}
