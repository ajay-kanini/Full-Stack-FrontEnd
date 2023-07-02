import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NavBar2() {
  const navigate = useNavigate();
  var logOut=()=>{ 
     toast.success("Bye!!!");    
     navigate("/");   
    localStorage.clear()};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#">Ajay's Health Care</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link logOut" to="/" onClick={logOut}>Log Out</Link>
          </li>
        </ul>
      </nav>
    </div>
   
  );
}

export default NavBar2;
