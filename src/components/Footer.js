import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light text-dark pt-4 shadow-sm mt-5">
      <div className="container">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary fw-bold">MyApp</h5>
            <p>Your trusted place for quality products and updates. Stay connected with us.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><NavLink className="text-dark text-decoration-none" to="/">Home</NavLink></li>
              <li><NavLink className="text-dark text-decoration-none" to="/shop">Shop</NavLink></li>
              <li><NavLink className="text-dark text-decoration-none" to="/about">About</NavLink></li>
              <li><NavLink className="text-dark text-decoration-none" to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact or Social */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <a href="https://facebook.com" className="me-3 text-dark">
              <i className="bi bi-facebook"></i> Facebook
            </a><br />
            <a href="https://twitter.com" className="me-3 text-dark">
              <i className="bi bi-twitter"></i> Twitter
            </a><br />
            <a href="https://instagram.com" className="me-3 text-dark">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>

        </div>

        <div className="text-center border-top py-3 mt-3">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
