// import React from 'react';
import "./Tanks.css"; // Ensure you have the CSS file for styles

const Tanks = () => {
  // Sample tank images with titles (replace these with your actual images and titles)
  const tankData = [
    { src: "/images/bettaTank.png", title: "Betta Tank" },
    { src: "/images/tank2.png", title: "Aquarium 2ft" },
    { src: "/images/bowl.png", title: "Aquarium Bowl" },
    { src: "/images/tank3.png", title: "Aquarium 3ft" },
    { src: "/images/tank1ft.png", title: "Aquarium 1ft" },
    { src: "/images/tank5.png", title: "Aquarium 5ft" },
    // Add more tank images and titles as needed
  ];

  return (
    <div className="tanks">
      <h2>Our Tanks</h2>
      <div className="tank-gallery">
        {tankData.map((tank, index) => (
          <div className="tank-card" key={index}>
            <img src={tank.src} alt={tank.title} />
            <h3>{tank.title}</h3>
            {/* <button className="view-details">View Details</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tanks;
