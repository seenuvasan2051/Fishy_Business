// import React from 'react';
import "./Food.css"; // Ensure you have the CSS file for styles

const Food = () => {
  // Sample food images with titles (replace these with your actual images and titles)
  const foodData = [
    { src: "/images/royalOscar.jpg", title: "Royal Oscar" },
    { src: "/images/royalGuppy.jpg", title: "Royal Guppy" },
    { src: "/images/royalBetta.jpg", title: "Royal Betta" },
    { src: "/images/tayo.png", title: "Taiyo" },
    { src: "/images/trueColor.jpg", title: "True Color" },
    { src: "/images/optimum.jpg", title: "Optimum" },
    { src: "/images/capsules.png", title: "Artemia Capsules" },
    // Add more food images and titles as needed
  ];

  return (
    <div className="food">
      <h2>Our Food</h2>
      <div className="food-gallery">
        {foodData.map((food, index) => (
          <div className="food-card" key={index}>
            <img src={food.src} alt={food.title} />
            <h3>{food.title}</h3>
            <button className="view-details">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
