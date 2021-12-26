import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <main>
      <h1>Keagan Anderson's Project Portfolio</h1>
      <div className="navBar">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </main>
  );
}

export default Header;