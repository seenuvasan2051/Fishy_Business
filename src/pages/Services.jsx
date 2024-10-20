import { List } from "../components";

export const Services = () => {
  const services = [
    {
      icon: "🐟",
      title: "Guppy Fish Sales & Aquarium Services",
      description:
        "Get a variety of Guppy fishes and expert care for your aquarium needs.",
    },
    {
      icon: "🌿",
      title: "Aquascaping",
      description:
        "Custom designs for your aquarium to make it a beautiful, natural habitat.",
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      description:
        "We offer regular maintenance services to keep your tank in top condition.",
    },
    {
      icon: "🍽️",
      title: "Fish Food",
      description:
        "High-quality fish food options to ensure your fish are well-nourished and healthy.",
    },
    {
      icon: "📍",
      title: "Hassle-free setups",
      description:
        "For beginners and experts, we offer quick and easy setups for your aquarium.",
    },
  ];

  return (
    <div className="container-primary">
      <h2>Our Services</h2>
      <List
        items={services}
        renderItem={(service) => (
          <>
            {service.icon} <strong>{service.title}:</strong>{" "}
            {service.description}
          </>
        )}
      />
    </div>
  );
};
