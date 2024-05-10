import React from 'react';

const CarDetails = ({ car }) => {
  if (!car) {
    return <p>No car data available</p>;
  }

  return (
    <div className="car-details">
      <h2>Car Details: {car.make} {car.model}</h2>
      <ul>
        <li>Year: {car.year}</li>
        <li>Color: {car.color}</li>
        <li>Price: ${car.price}</li>
        <li>Trim: {car.trim}</li>
        <li>Style: {car.style}</li>
        <li>Type: {car.type}</li>
        <li>Size: {car.size}</li>
        {/* Add more details as needed */}
      </ul>
    </div>
  );
};

export default CarDetails;