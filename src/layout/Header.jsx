import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img
            src="https://skymark.in/web/assets/images/svg/skymarkLogo.svg"
            alt="Logo of the website"
          />
        </div>
        <ul>
          <li>
            <a href="/">Process</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">Calculator</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
