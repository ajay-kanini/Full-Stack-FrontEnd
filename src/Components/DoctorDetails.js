import React, { useState, useEffect } from 'react';
import './DoctorDetails.css';
import Navbar2 from './Navbar2';
import image from "../Assets/doctor.png";

function DoctorDetails() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doctorId = localStorage.getItem('Id');
    fetch(`http://localhost:5179/api/Hospital/GetOneDoctor?key=${doctorId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch doctor details');
        }
        return response.json();
      })
      .then(data => {
        if (data && Array.isArray(data.doctors)) {
          setDoctors(data.doctors);
        } else {
          setError('Invalid response data');
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
            {error ? (
              <div>Error: {error}</div>
            ) : (
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
