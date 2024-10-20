import { CardList } from "../../components";

export const Accessories = () => {
  const accessoriesData = [
    { src: "/images/airPump1Way.png", title: "Air Pump 1 Way" },
    { src: "/images/airStone.png", title: "Air Stone" },
    { src: "/images/CeramicStones.png", title: "Ceramic Stones" },
    { src: "/images/filter.png", title: "Internal Filter 2ft" },
    { src: "/images/internalFilter.png", title: "internal Filter" },
    { src: "/images/siphon.png", title: "Siphon" },
    { src: "/images/spongeFilterS.png", title: "Sponge Filter Small" },
    { src: "/images/aquaClear.png", title: "Aqua Clear" },
    { src: "/images/hangOn.png", title: "Hang On Filter" },
    { src: "/images/2WayPump.png", title: "Air Pump 2 Way" },
    { src: "/images/miniLight.png", title: "Clip Light" },
    { src: "/images/greenNet.png", title: "Fish Net Large" },
    { src: "/images/driftWood.png", title: "Drift Woods" },
    { src: "/images/ledLight.png", title: "RGB LED Lights" },
    { src: "/images/colorStones.png", title: "Color Stones" },
    { src: "/images/tankScrapper.png", title: "Tank Scrappers" },
    { src: "/images/plantedLight.png", title: " Aqua Planted Lights" },
  ];

  return <CardList title="Our Accessories" data={accessoriesData} />;
};
