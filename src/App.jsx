import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Services from "./components/Services"; 
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import Fishes from "./components/Fishes"; // Import the Fishes component
import Food from "./components/Food"; // Import the Food component
import Accessories from "./components/Accessories"; // Import the Accessories component
import Tanks from "./components/Tanks"; // Import the Tanks component

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
                <Route path="/categories/tanks" element={<Tanks />} /> {/* Add this route */}
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
