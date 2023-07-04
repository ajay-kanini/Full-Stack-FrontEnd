import React from 'react';
import './Message.css';
import NavBar2 from './Navbar2';
import image from '../Assets/doctor.png'

function Message() {
  return (
    <section className="home-background-radial-gradient">
      <NavBar2 />
      <div className='notify'>
        <p>Please wait till you get authorized!!!</p>
      </div>
      <div>
      <img src={image} className='home-doctor-Image'></img>
      </div>
    </section>
  );
}

export default Message;
