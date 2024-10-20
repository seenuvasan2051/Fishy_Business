/* eslint-disable react/prop-types */

export const CardList = ({ title, data }) => {
  return (
    <div className="card-list">
      <h2>{title}</h2>
      <div className="card-gallery">
        {data.map((card, index) => (
          <div className="card-card" key={index}>
            <div className="card-img-container">
              <img src={card.src} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <button className="view-details">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};
