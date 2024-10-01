import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Employee Management</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employees">View Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
