import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav>
      <Link to="/active-orders">Active Orders</Link>
      <Link to="/completed-orders">Completed Orders</Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
