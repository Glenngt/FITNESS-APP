import React from 'react';
import { Link } from 'react-router-dom';

const FitNavbar = () => {
  const navbarStyle = {
    backgroundColor: 'transparent',
  };

  const linkStyleL = {
    color: 'red',
    margin: '0 0', 
    fontSize: '30px', 
    transition: 'color 1.3s, font-size 0.3s', 
  };

  const linkStyle = {
    color: 'red',
    margin: '0 50px', 
    fontSize: '20px', 
    transition: 'color 1.3s, font-size 0.3s', 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container">
        <a className="navbar-brand mr-auto" href="#" style={linkStyleL}>
          <b>FlexFusion App</b>
        </a>
        <button
          className="navbar-toggler bg-danger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={linkStyle}>
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exercise" style={linkStyle}>
                <b>Exercises</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={linkStyle}>
                <b>Sign-In</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FitNavbar;
