import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
  Home,
  About,
  Services,
  Contact,
  Categories,
  Fishes,
  Food,
  Accessories,
  Tanks,
} from "./pages";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/fishes" element={<Fishes />} />
        <Route path="/categories/food" element={<Food />} />
        <Route path="/categories/accessories" element={<Accessories />} />
        <Route path="/categories/tanks" element={<Tanks />} />{" "}
        {/* Add this route */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
