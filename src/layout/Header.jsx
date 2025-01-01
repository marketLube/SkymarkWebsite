import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = ({ setIsFormOpen }) => {
  const [checked, setIsChecked] = useState(false);

  return (
    <header className="header">
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
            <ul className="navigation__list">
              <li
                className="navigation__item"
                onClick={() => setIsChecked(false)}
              >
                <a href="/" className="navigation__link">
                  Process
                </a>
              </li>
              <li
                className="navigation__item"
                onClick={() => setIsChecked(false)}
              >
                <a href="/" className="navigation__link">
                  Events
                </a>
              </li>
              <li
                className="navigation__item"
                onClick={() => setIsChecked(false)}
              >
                <a href="/" className="navigation__link">
                  Contact
                </a>
              </li>
              <li
                className="navigation__item"
                onClick={() => setIsChecked(false)}
              >
                <a
                  href="#"
                  className="navigation__link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsFormOpen(true);
                  }}
                >
                  Enquiry
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="nav-list">
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
