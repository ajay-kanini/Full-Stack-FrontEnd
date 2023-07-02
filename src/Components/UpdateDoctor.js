import React, { useState, useEffect } from 'react';
import './UpdateDoctor.css';
import NavBar2 from './Navbar2';

function UpdateDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchNotApproved();
  }, []);

  const fetchNotApproved = () => {
    fetch('http://localhost:5179/api/Hospital/GetDoctorDetails')
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(error => console.log(error));
  };

  const handleStatusChange = (id) => {
    fetch("http://localhost:5179/api/Hospital/UpdateDoctorStatus", {
      method: "PUT",
      headers: {
        "Accept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "id": id })
    })
      .then(async (data) => {
        if (data.status === 201) {
          var myData = await data.json();
          console.log(myData);
        }
        fetchNotApproved();
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <section className="background-radial-gradient">
         <NavBar2/>
      <div className="scrollable-container-new">
        <div className="doctors-container-new">
          <div className="page-heading-new">
            <h2>Doctor Details</h2>
          </div>
          <div className="cards-new">
            {doctors.map((doctor, index) => (
              <div key={doctor.id} className={`card-new card`}>
                <div className="card-body-new">
                  <h5 className="card-title-new">{doctor.name}</h5>
                  <p className="card-text-new">Age: {doctor.age}</p>
                  <p className="card-text-new">Specialization: {doctor.specialization}</p>
                  <p className="card-text-new">Qualifications: {doctor.qualifications}</p>
                  <p className="card-text-new">Status: {doctor.status}</p>
                  <hr />
                  <button
                    className="change-status-btn-new"
                    onClick={() => handleStatusChange(doctor.id)}
                  >
                    Change Status
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateDoctor;
