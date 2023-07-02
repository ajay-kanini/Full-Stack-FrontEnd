import React, { useState, useEffect } from 'react';
import './GetAllDoctors.css';
import doctorImage from '../Assets/doctor.jpg';

function GetAllDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5179/api/Hospital/GetDoctorDetails')
      .then(response => response.json())
      .then(data => {
        const approvedDoctors = data.filter(doctor => doctor.status === 'Approved');
        setDoctors(approvedDoctors);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="my-background-radial-gradient overflow-hidden">
  <div className="my-doctors-container">
    <div className="my-page-heading">
      <h2>Doctor Details</h2>
    </div>
    <div className="my-cards">
  {doctors.map((doctor, index) => (
    <div key={doctor.id} className="my-card card-4">
      <div className="my-card-body">
      <img
          src={doctorImage}
          alt="Doctor"
          className="my-card-image"
          style={{ maxWidth: '100%', height: '130px' }}
        />        <div>
          <h5 className="my-card-title">{doctor.name}</h5>
          <p className="my-card-text">Age: {doctor.age}</p>
          <p className="my-card-text">Gender: {doctor.gender}</p>
          <p className="my-card-text">Specialization: {doctor.specialization}</p>
          <p className="my-card-text">Qualifications: {doctor.qualifications}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
</div>

  );
}

export default GetAllDoctors;
