import React from 'react';
import { Link } from 'react-router-dom';

const CarMenu = () => {
  return (
    <div className="car-menu">
      <h2>Car Menu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default CarMenu;