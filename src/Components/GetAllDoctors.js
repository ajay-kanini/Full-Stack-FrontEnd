import React, { useState, useEffect } from 'react';
import './GetAllDoctors.css';
import NavBar2 from './Navbar2';
import PrintDoctor from './PrintDoctor';


function GetAllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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

    <div className="background-radial-gradient overflow-hidden">
        <NavBar2/>
      <div className="doctorsDetails-container">
        <div className="page-heading">
        <input type='text' className='searchFilter' value={searchQuery} placeholder="&nbsp;search your doctors..." onChange={(event)=>setSearchQuery(event.target.value)}/>
          <h2>Doctor Details</h2>
        </div>
        { 
            doctors.filter((doctor)=>searchQuery.trim() ==='' || searchQuery.toLowerCase()===doctor.specialization.toLowerCase())
            .map((doctor, index) => {
              return (<PrintDoctor key={index} object={doctor} />);
          })
        }
      </div>
    </div>
    
  );
}

export default GetAllDoctors;
