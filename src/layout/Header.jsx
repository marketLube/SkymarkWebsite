import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setIsChecked] = useState(false);

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    navigate("/enquiry");
  };

  const isEnquiryPage = location.pathname === "/enquiry";

  // Navigation items based on current page
  const navigationItems = isEnquiryPage ? (
    <li className="navigation__item" onClick={() => setIsChecked(false)}>
      <a href="/" className="navigation__link">
        Register
      </a>
    </li>
  ) : (
    <>
      <li className="navigation__item" onClick={() => setIsChecked(false)}>
        <a href="/" className="navigation__link">
          Process
        </a>
      </li>
      <li className="navigation__item" onClick={() => setIsChecked(false)}>
        <a href="/" className="navigation__link">
          Events
        </a>
      </li>
      <li className="navigation__item" onClick={() => setIsChecked(false)}>
        <a href="/" className="navigation__link">
          Contact
        </a>
      </li>
      <li className="navigation__item" onClick={() => setIsChecked(false)}>
        <a href="#" className="navigation__link" onClick={handleEnquiryClick}>
          Enquiry
        </a>
      </li>
    </>
  );

  const desktopNavItems = isEnquiryPage ? (
    <li className="nav-item">
      <a href="/">Register</a>
    </li>
  ) : (
    <>
      <li className="nav-item">
        <a href="#process">Process</a>
      </li>
      <li className="nav-item">
        <a href="#about">Events</a>
      </li>
      <li className="nav-item">
        <a href="/">Contact</a>
      </li>
      <li className="nav-item">
        <a href="#" onClick={handleEnquiryClick}>
          Enquire
        </a>
      </li>
    </>
  );

  return (
    <header
      className="header"
      style={isEnquiryPage ? { marginLeft: "-20px" } : undefined}
    >
      <nav>
        <div className="logo" onClick={() => (window.location.href = "/")}>
          <img
            src="https://skymark.in/web/assets/images/svg/skymarkLogo.svg"
            alt="Logo of the website"
          />
        </div>

        <div className="navigation">
          <input
            checked={checked}
            onClick={() => setIsChecked((checked) => !checked)}
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
