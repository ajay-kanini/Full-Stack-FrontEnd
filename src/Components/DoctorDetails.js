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
      .then( async (data) => {
        if (data.status == 200) {
          var myData=await data.json();
          setDoctors(await myData);   
          console.log(data);
        } 
        if(myData.status=="Not Approved")
        {
          toast.error("You are not authorized yet")
          navigate('/');
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
        <div className="details-section">
          <div className="doctor-details">
            <div className="page-heading">
              <h2>Doctor Details</h2>
            </div>
            <div className="details">
              <div className="doc-details">
                <div className="detail-title">
                  <span>Name:</span> <span className='text'>{doctors.name}</span>
                </div>
                <div className="detail-title">
                  <span>Age:</span> <span className='text'>{doctors.age}</span>
                </div>
                <div className="detail-title">
                  <span>Gender:</span> <span className='text'>{doctors.gender}</span>
                </div>
                <div className="detail-title">
                  <span>Specialization:</span> <span className='text'>{doctors.specialization}</span>
                </div>
                <div className="detail-title">
                  <span>Qualifications:</span> <span className='text'> {doctors.qualifications} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={image} className="new-doctorImage" alt="Doctor" />
        </div>
      </div>
        <div className="image-section">
          <img src={image} className="new-doctorImage" alt="Doctor" />
        </div>
    </section>
  );
}

export default DoctorDetails;
