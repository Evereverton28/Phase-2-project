import React, { useState, useEffect } from 'react';
import CarDetails from './CarDetails';

const CarList = ({ cars, onDeleteCar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    
    const filtered = cars.filter((car) => {
      const searchString = ${car.year} ${car.make} ${car.model}.toLowerCase();
      return searchString.includes(searchQuery.toLowerCase());
    });
    setFilteredCars(filtered);
  }, [cars, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = (index) => {
    onDeleteCar(index);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <h2>Car Inventory</h2>
      
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search cars..."
      />
      <ul>
        {filteredCars.map((car, index) => (
          <li key={index}>
            <div className="car-item" onClick={() => handleCarClick(car)}>
              {car.year} {car.make} {car.model}
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <CarDetails car={selectedCar} /> 
    </div>
  );
};
export default CarList;