import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { toast } from 'react-toastify';

function NavBar() {
  var home = () => {
    localStorage.clear();
    toast.success("Going Home!!!");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          Ajay's Health Care
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={home}>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
