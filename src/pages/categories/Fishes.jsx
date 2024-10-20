import { CardList } from "../../components/ui/CardList";

export const Fishes = () => {
  // Sample card images with titles (replace these with your actual images and titles)
  const fishData = [
    { src: "/images/bettaFish.jpg", title: "Betta (Fighter)" },
    { src: "/images/angel.jpg", title: "Angel" },
    { src: "/images/discuss.jpg", title: "Discuss" },
    { src: "/images/guppy1.jpg", title: "Guppy" },
    { src: "/images/guppyWhite.jpg", title: "White Tailed Guppy " },
    { src: "/images/neonTetra.jpg", title: "Neon Tettra" },
    { src: "/images/tankCleaner.jpg", title: "Tank Cleaner" },
    // Add more card images and titles as needed
  ];

  return <CardList title="Our Fishes" data={fishData} />;
};
