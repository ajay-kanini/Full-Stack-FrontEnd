import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Home from './Home'

function NavBar() {
  var logOut=()=>{ localStorage.clear()};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Ajay's Healt Care</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link logOut" to="/" onClick={logOut}>Log Out</Link>
          </li>
        </ul>
      </nav>
      {/* <Home/> */}
    </div>
   
  );
}

export default NavBar;
