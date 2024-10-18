// import React from 'react';
import './Fishes.css'; // Ensure you have the CSS file for styles

const Fishes = () => {
    // Sample fish images with titles (replace these with your actual images and titles)
    const fishData = [
        { src: '/images/bettaFish.jpg', title: 'Betta (Fighter)' },
        { src: '/images/angel.jpg', title: 'Angel' },
        { src: '/images/discuss.jpg', title: 'Discuss' },
        { src: '/images/guppy1.jpg', title: 'Guppy' },
        { src: '/images/guppyWhite.jpg', title: 'White Tailed Guppy ' },
        { src: '/images/neonTetra.jpg', title: 'Neon Tettra' },
        { src: '/images/tankCleaner.jpg', title: 'Tank Cleaner' },
        // Add more fish images and titles as needed
    ];

    return (
        <div className="fishes">
            <h2>Our Fishes</h2>
            <div className="fish-gallery">
                {fishData.map((fish, index) => (
                    <div className="fish-card" key={index}>
                        <img src={fish.src} alt={fish.title} />
                        <h3>{fish.title}</h3>
                        <button className="view-details">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fishes;
