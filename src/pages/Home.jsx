import React from 'react';
import CarForm from '../components/CarForm';
import CarDetails from '../components/CarDetails';

const Home = ({ onAddCar, car }) => {
  return (
    <div>
      <h1>Welcome to Car Inventory</h1>
      <p>
        This is a simple car inventory management application. You can use this app to add new cars to your inventory and view existing car details.
      </p>
      {/* Render CarForm and CarDetails conditionally based on props */}
      {onAddCar ? <CarForm onAddCar={onAddCar} /> : <CarForm />}
      {car && <CarDetails car={car} />}
    </div>
  );
};

export default Home;
