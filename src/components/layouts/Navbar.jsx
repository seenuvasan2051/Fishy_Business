import { useState } from "react";
import { NavLink } from "react-router-dom";
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode character for hamburger icon */}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>
            Home
          </NavLink>
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
                <NavLink
                  to="/categories/fishes"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  Fishes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories/food"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories/accessories"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  Accessories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories/tanks"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  Tanks
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/services"
            activeClassName="active-link"
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active-link"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
