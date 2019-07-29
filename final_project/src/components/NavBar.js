import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Notes++
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/notes" className="nav-link">
                Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addnote" className="nav-link">
                New Note
              </Link>
            </li>
            {/*

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
