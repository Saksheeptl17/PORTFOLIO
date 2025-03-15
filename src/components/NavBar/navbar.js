import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={menuOpen ? "desktopMenu active" : "desktopMenu"}>
        <Link to="intro" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuListIteam">Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuListIteam">About Me</Link>
        <Link to="education" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuListIteam">Education</Link>
        <Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuListIteam">Experience</Link>
        <Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuListIteam">Tech Stack</Link>
        <Link to="project" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuListIteam">Portfolio</Link>

        {/* Contact Me button moved inside dropdown */}
        <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
