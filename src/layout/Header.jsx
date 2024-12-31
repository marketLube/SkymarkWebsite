import React from "react";

export const Header = ({ setIsFormOpen }) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img
            src="https://skymark.in/web/assets/images/svg/skymarkLogo.svg"
            alt="Logo of the website"
          />
        </div>
        <ul className="nav-list">
          <li>
            <a href="/">Process</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a
              href="#"
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
    </header>
  );
};
