import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">
          Home
        </Link>
        <Link to="/about" className="desktopMenuListItem">
          About
        </Link>
        <Link to="/experience" className="desktopMenuListItem">
          Experience
        </Link>
        <Link to="/skills" className="desktopMenuListItem">
          Skills
        </Link>
        <Link to="/interest" className="desktopMenuListItem">
          Interest
        </Link>
        <Link to="/awards" className="desktopMenuListItem">
          Awards
        </Link>
      </div>
      <Link to="/contact" className="desktopMenuBtn">
        {" "}
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="/"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="/about"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="/experience"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="/skills"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="/interest"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Interest
        </Link>
        <Link
          activeClass="active"
          to="/awards"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Awards
        </Link>
        <Link
          to="/contact"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
