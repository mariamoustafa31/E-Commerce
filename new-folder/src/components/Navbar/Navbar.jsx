/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i id="i1" className="fa-solid fa-store"></i> MiroShop
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Category">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Brands">
                Brands
              </Link>
            </li>

            {/* Cart Link */}
            <li className="nav-item">
              <Link to="/cart" className="cart-link">
                Cart{' '}
                {cartCount > 0 && (
                  <span>{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Signup">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Signin">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

