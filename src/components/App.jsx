// App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import About from '../pages/About';
import NavBar from './NavBar';
import CarMenu from './CarMenu';
import CarForm from './CarForm';
import CarList from './CarList';
import './App.css';

const App = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = () => {
    fetch('http://localhost:4000/cars')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        return response.json();
      })
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  const handleDeleteCar = (index) => {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
    // Persist the updated car list to localStorage or API
    // Example: localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app-container">
      <NavBar />
      <CarMenu />
      <Routes>
        <Route path="/" element={<Home cars={cars} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-car" element={<CarForm onAddCar={handleAddCar} />} />
        <Route path="/inventory" element={<CarList cars={cars} onDeleteCar={handleDeleteCar} />} />
      </Routes>
    </div>
  );
};

export default App;

