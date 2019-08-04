import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <button>
          <i className="fas fa-cart-plus" /> My Cart
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
