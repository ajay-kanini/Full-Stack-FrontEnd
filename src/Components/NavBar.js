import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Home from './Home'

function NavBar() {
  var logOut=()=>{ localStorage.clear()};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand " href="#">Ajay's Health Care</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"> <span> Home </span></Link>
            </li>
            </ul>
          </div>   
      </nav>
    </div>
   
  );
}

export default NavBar;
