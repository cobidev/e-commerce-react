import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const NavWrapper = styled.nav`
  background-color: var(--main-blue);

  .nav-link {
    color: var(--main-white) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
