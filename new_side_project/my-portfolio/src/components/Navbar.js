import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#languages">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
