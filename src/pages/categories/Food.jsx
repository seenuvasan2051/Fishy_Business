// import React from 'react';
import { CardList } from "../../components";

export const Food = () => {
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

  return <CardList title="Our Food" data={foodData} />;
};
