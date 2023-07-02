import React, { useState, useEffect } from 'react';
import './DoctorDetails.css';
import NavBar from './NavBar';
import image from "../Assets/doctor.png";

function DoctorDetails() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const doctorId = localStorage.getItem('Id'); // Retrieve the ID from localStorage
    fetch(`http://localhost:5179/api/Hospital/GetOneDoctor/${doctorId}`)
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="new-background-radial-gradient">
      <NavBar />
      <div className="new-container">
        <div className="details-section">
          <div className="doctor-details">
            <div className="page-heading">
              <h2>Doctor Details</h2>
            </div>
            {doctors.length > 0 ? (
              <div className="details">
                {doctors.map((doctor, index) => (
                  <div key={index} className="doc-details">
                    <div className="detail-title">Name:</div>
                    <div className="detail-text">{doctor.name}</div>
                    <div className="detail-title">Age:</div>
                    <div className="detail-text">{doctor.age}</div>
                    <div className="detail-title">Gender:</div>
                    <div className="detail-text">{doctor.gender}</div>
                    <div className="detail-title">Specialization:</div>
                    <div className="detail-text">{doctor.specialization}</div>
                    <div className="detail-title">Qualifications:</div>
                    <div className="detail-text">{doctor.qualifications}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No doctor details available.</div>
            )}
          </div>
        </div>
        <div className="image-section">
          <img src={image} className="new-doctorImage" alt="Doctor" />
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
