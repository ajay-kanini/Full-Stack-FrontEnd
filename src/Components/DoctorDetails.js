import React, { useState, useEffect } from 'react';
import './DoctorDetails.css';
import Navbar2 from './Navbar2';
import image from "../Assets/doctor.png";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

function DoctorDetails() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {    
    const doctorId = Number(localStorage.getItem('Id'));
    console.log(doctorId);
    fetch(`http://localhost:5179/api/Hospital/GetOneDoctor?key=${doctorId}`)
      .then(async (data) => {
        if (data.status == 200) {
          var myData = await data.json();
          setDoctors(await myData);   
          console.log(data);
        } 
        if (myData.status == "Not Approved") {
          navigate('/message');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <section className="new-background-radial-gradient">
      <Navbar2 />
      <div className="new-container">
      <div className="image-section">
              <img src={image} className="new-doctorImage" alt="Doctor" />
            </div>
        <div className="details-section">
          <div className="doctor-details">
            <div className="page-heading">
              <h2>Doctor Detail</h2>
            </div>
            <div className="details">
              <h3>Name:</h3>
              <p className='text'>{doctors.name}</p>

              <h3>Age:</h3>
              <p className='text'>{doctors.age}</p>

              <h3>Gender:</h3>
              <p className='text'>{doctors.gender}</p>

              <h3>Specialization:</h3>
              <p className='text'>{doctors.specialization}</p>

              <h3>Qualifications:</h3>
              <p className='text'>{doctors.qualifications}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
