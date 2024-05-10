 import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1 className="logo">CARS 4 YOU</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
