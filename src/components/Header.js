import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">eSIM Company</div>
      <nav className="nav">
        <a href="about">About Us</a>
        <a href="contact">Contact</a>
        <a href="faq">FAQ</a>
        <a href="eSIMS">My eSIMS</a>
        <a href="language">EN</a>
      </nav>
    </header>
  );
}

export default Header;
