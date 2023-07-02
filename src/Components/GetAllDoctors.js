import React, { useState, useEffect } from 'react';
import './GetAllDoctors.css';

function GetAllDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5179/api/Hospital/GetDoctorDetails')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="doctors-container container">
        <div className="page-heading">
          <h2>Doctor Details</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {doctors.map(doctor => (
            <div key={doctor.id} className="col">
              <div className="card bg-glass">
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">Age: {doctor.age}</p>
                  <p className="card-text">Specialization: {doctor.specialization}</p>
                  <p className="card-text">Qualifications: {doctor.qualifications}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetAllDoctors;
