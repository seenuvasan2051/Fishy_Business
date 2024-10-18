// import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'; // Import the CSS file

const Categories = () => {
    return (
        <div className="categories-container">
            <h2>Categories</h2>
            <ul>
                <li><Link to="/categories/fishes">Fishes</Link></li>
                <li><Link to="/categories/food">Food</Link></li>
                <li><Link to="/categories/accessories">Accessories</Link></li>
                <li><Link to="/categories/tanks">Tanks</Link></li>
            </ul>
        </div>
    );
};

export default Categories;
    