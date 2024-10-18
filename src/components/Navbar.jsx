import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import Navbar styles

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                    className="categories-dropdown"
                >
                    Categories
                    {isDropdownOpen && (
                        <ul className="dropdown">
                            <li><Link to="/categories/fishes">Fishes</Link></li>
                            <li><Link to="/categories/food">Food</Link></li>
                            <li><Link to="/categories/accessories">Accessories</Link></li>
                            <li><Link to="/categories/tanks">Tanks</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
