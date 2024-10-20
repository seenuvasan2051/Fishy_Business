import { CardList } from "../../components";

export const Tanks = () => {
  const tankData = [
    { src: "/images/bettaTank.png", title: "Betta Tank" },
    { src: "/images/tank2.png", title: "Aquarium 2ft" },
    { src: "/images/bowl.png", title: "Aquarium Bowl" },
    { src: "/images/tank3.png", title: "Aquarium 3ft" },
    { src: "/images/tank1ft.png", title: "Aquarium 1ft" },
    { src: "/images/tank5.png", title: "Aquarium 5ft" },
  ];

  return <CardList title="Our Tank Varieties" data={tankData} />;
};
