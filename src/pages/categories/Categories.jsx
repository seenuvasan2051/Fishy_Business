import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="card-container">
      <h2>Categories</h2>
      <ul>
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
    </div>
  );
};
