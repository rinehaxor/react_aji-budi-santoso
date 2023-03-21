import React from 'react';
import logo from '../assets/slpposedit.png';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="img">
            <img className="w-50" src={logo} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse container-fluid justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="btn btn-danger mx-1 px-3 text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-none mx-1 px-3 text-danger fw-semibold" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-none mx-1 px-3 text-danger fw-semibold" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-none mx-1 px-3 text-danger fw-semibold" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-none mx-1 text-danger fw-semibold" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
