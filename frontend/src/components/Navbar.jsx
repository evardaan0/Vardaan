import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo left-aligned */}
        <Link className="navbar-brand me-4" to="/">
          <img
            src="/assets/img/logo.png"
            alt="Vardaan Enterprises"
            className="navbar-logo"
          />
        </Link>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <NavLink end className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </NavLink>
              <ul className="dropdown-menu">
              <li>
                  <Link className="dropdown-item" to="/services/architecture">
                    Architecture Construction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/road">
                    Road Construction
                  </Link>
                </li>
                 <li>
                  <Link className="dropdown-item" to="/services/land">
                    Land Construction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/hospitality">
                    Commercial Building Construction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/interior">
                    Interior Construction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/mep">
                    MEP Construction
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/career">
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Extra CSS */}
      <style>
        {`
          /* Navbar background */
          .custom-navbar {
            background-color: black !important;
            padding: 10px 0; 
            height: 120px;    
            z-index: 1000;
            display: flex;
            align-items: center;
          }

          .navbar-logo {
            height: 400px;      
            width: auto;
            max-height: 100%;   
            object-fit: contain;
          }

          /* Navbar links text */
          .navbar-nav .nav-link {
            color: #ffffff !important;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .navbar-nav .nav-link:hover {
            color: #FFD700 !important;
          }
          .navbar-nav .nav-link.active {
            color: #FFD700 !important;
            font-weight: 700;
            text-decoration: none !important; /* ensure no underline */
            border: none !important; /* remove border-bottom */
          }

          /* Dropdown hover */
          .dropdown-item:hover {
            background-color: #FFD700 !important;
            color: #000 !important;
          }

          /* Hamburger icon color */
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255,215,0,1%29' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }

          /* Responsive adjustments */
          @media (max-width: 991px) {
            .custom-navbar {
              padding: 10px 0;
            }
            .navbar-logo {
              height: 80px; /* Mobile logo size */
            }
          }
        `}
      </style>
    </nav>
  );
}
