import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css"; // Import Navbar styles

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode character for hamburger icon */}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
          className="categories-dropdown"
        >
          Categories
          {isDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/categories/fishes">Fishes</Link>
              </li>
              <li>
                <Link to="/categories/food">Food</Link>
              </li>
              <li>
                <Link to="/categories/accessories">Accessories</Link>
              </li>
              <li>
                <Link to="/categories/tanks">Tanks</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
