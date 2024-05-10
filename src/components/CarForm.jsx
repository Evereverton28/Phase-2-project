import React, { useState } from 'react';

const CarForm = ({ onAddCar, useApi = false }) => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (useApi) {
      
      try {
        const response = await fetch('http://localhost:4000/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ year, make, model })
        });
        if (!response.ok) {
          throw new Error('Failed to add car');
        }
        
        setYear('');
        setMake('');
        setModel('');
      } catch (error) {
        console.error('Error adding car:', error.message);
      }
    } else {
      
      onAddCar({ year, make, model });
    
      setYear('');
      setMake('');
      setModel('');
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="year">Year:</label>
        <input id="year" type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        <label htmlFor="make">Make:</label>
        <input id="make" type="text" value={make} onChange={(e) => setMake(e.target.value)} />
        <label htmlFor="model">Model:</label>
        <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
