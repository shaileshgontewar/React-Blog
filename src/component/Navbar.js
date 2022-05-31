import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/home",
  },

  {
    title: "Bollywood",
    path: "/bollywood",
  },

  {
    title: "Technology",
    path: "/technology",
  },
  {
    title: "Hollywood",
    path: "/Hollywood",
  },
  {
    title: "Fitness",
    path: "/fitness",
  },
  {
    title: "Food",
    path: "/food",
  },
];

function Navbar() {
  return (
    <>
      <div className="heading">
        <span>The</span>
        <h1>Siren</h1>
      </div>
      <nav className="site-navigation">
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}> {link.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
