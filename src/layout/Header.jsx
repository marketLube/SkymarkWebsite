import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setIsChecked] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  console.log(currentHash, "checkedHash");

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

      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [checked]);

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    setIsChecked(false);
    navigate("/enquiry");
  };

  useEffect(() => {
    if (location.pathname === "/enquiry") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  const handleScrollToSection = (sectionId) => {
    const targetId = sectionId.startsWith("#")
      ? sectionId.substring(1)
      : sectionId;

    // console.log("Active section:", targetId);

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

      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    window.open("https://wa.me/+918138929049", "_blank");
  };

  const isEnquiryPage = location.pathname === "/enquiry";

  const navigationItems = isEnquiryPage ? (
    <>
      <li className="navigation__item">
        <a
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("process");
            setIsChecked(false);
          }}
          style={
            currentHash === "#process"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Process
        </a>
      </li>
      <li className="navigation__item">
        <a
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
            setIsChecked(false);
          }}
          style={
            currentHash === "#about"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Events
        </a>
      </li>
      <li className="navigation__item">
        <a
          className="navigation__link"
          onClick={handleWhatsAppRedirect}
          style={
            currentHash === "#contact"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Contact
        </a>
      </li>
      <li className="navigation__item">
        <a
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("home");
            setIsChecked(false);
          }}
          style={{
            background: "#244EA2",
            display: "inline-block",
            letterSpacing: "2px",
            fontSize: "1rem",
            fontWeight: 650,
            color: "white",
            borderRadius: "18px",
            padding: "3px 16px",
            border: "none",
          }}
        >
          Home
        </a>
      </li>
    </>
  ) : (
    <>
      <li className="navigation__item">
        <a
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("process");
          }}
          style={
            currentHash === "#process"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Process
        </a>
      </li>
      <li className="navigation__item">
        <a
          className="navigation__link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
          }}
          style={
            currentHash === "#about"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Events
        </a>
      </li>
      <li className="navigation__item">
        <a
          className="navigation__link"
          onClick={handleWhatsAppRedirect}
          style={
            currentHash === "#contact"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Contact
        </a>
      </li>
      <li className="navigation__item">
        <a
          onClick={handleEnquiryClick}
          style={{
            background: "#244EA2",
            display: "inline-block",
            letterSpacing: "2px",
            fontSize: "1rem",
            fontWeight: 650,
            color: "white",
            borderRadius: "18px",
            padding: "3px 16px",
            border: "none",
          }}
        >
          Register
        </a>
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
          style={
            currentHash === "#process"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
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
          style={
            currentHash === "#about"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Events
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={handleWhatsAppRedirect}
          style={
            currentHash === "#contact"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("home");
          }}
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
          Home
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
          style={
            currentHash === "#process"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
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
          style={
            currentHash === "#about"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
        >
          Events
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={handleWhatsAppRedirect}
          style={
            currentHash === "#contact"
              ? { fontWeight: "800", color: "#244ea2" }
              : {}
          }
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
            padding: "10px 20px",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Register
        </button>
      </li>
    </>
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      console.log("Current hash:", window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    console.log("Initial hash:", window.location.hash);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <div
          className="logo"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              navigate("/");
              setIsChecked(false);
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }, 300);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://res.cloudinary.com/ds07e7rod/image/upload/v1738836367/skymarkLogo_drgzcw.svg"
            alt="Logo of the website"
          />
        </div>

        <div className="navigation">
          <input
            checked={checked}
            type="checkbox"
            className="navigation__checkbox"
            id="navi__toggle"
            aria-label="Toggle navigation"
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <label
            htmlFor="navi__toggle"
            className="navigation__btn"
            aria-controls="navigationMenu"
          >
            <span className="navigation__icon"></span>
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
