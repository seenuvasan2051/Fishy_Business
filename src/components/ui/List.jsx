/* eslint-disable react/prop-types */

export const List = ({ items, renderItem }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
