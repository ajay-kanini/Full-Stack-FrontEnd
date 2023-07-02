import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import { Link, useNavigate } from "react-router-dom";
import image from "../Assets/doctor.png";

function Home() {
  const navigate = useNavigate();
  var login= () =>{
    navigate("/login")
   }
  return (  
    <section className="background-radial-gradient">
        <NavBar/>
      <div className="container">
        <div className="content">
          <div className='landingTexts'>
            <h1 className='landingHeading'>Find Your Doctor</h1>
            <p className='landingSideHeading mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
              <button className='landingButton mt-1' onClick={login}>Login</button>
              <hr className='mt-3' style={{width:"600px"}}></hr>
              <p className='catchyText'>
                      <span style={{fontSize:"30px"}}>A</span>re you tired of endlessly searching for the right doctor? Look no further! Our advanced platform is here to simplify your journey in finding the perfect healthcare professional. 
              With just a few clicks, you can access a comprehensive database of highly qualified doctors specializing in various fields. Whether you need a primary care physician, a specialist, or a surgeon, we have got you covered. Our user-friendly interface allows you to filter doctors based on location, expertise, ratings, and availability, ensuring you find the right match for your healthcare needs. Don't waste any more time. Take control of your health and begin your search for the ideal doctor today.
               Your well-being deserves nothing less than excellence.
              </p>
          </div>
          <img src={image} className='doctorImage'></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
