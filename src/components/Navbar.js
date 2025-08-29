import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          MyApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Home Link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active text-primary' : '')
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            
            {/* Shop Dropdown 
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="shopDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Shop
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/shop/clothing">
                    Clothing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/shop/electronics">
                    Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/shop/groceries">
                    Groceries
                  </NavLink>
                </li>
              </ul>
            </li> */}

            {/* Other Nav Items */}
            {[
              ['product', '/product'],
              ['Blog', '/blog'],
              ['Careers', '/careers'],
              ['FAQ', '/faq'],
              ['Support', '/support'],
              ['Privacy', '/privacy'],
              ['Terms', '/terms'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, path], i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active text-primary' : '')
                  }
                  to={path}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
