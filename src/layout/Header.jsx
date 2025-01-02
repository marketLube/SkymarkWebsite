import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = ({ setIsFormOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={() => (window.location.href = "/")}>
          <img
            src="https://skymark.in/web/assets/images/svg/skymarkLogo.svg"
            alt="Logo of the website"
          />
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </div>

        <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsFormOpen(true);
              }}
            >
              Enquire
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
