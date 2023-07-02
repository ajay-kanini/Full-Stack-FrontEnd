// import React, { useState, useEffect } from 'react';
// import './GetAllDoctors.css';


// function GetAllDoctors() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5179/api/Hospital/GetDoctorDetails')
//       .then(response => response.json())
//       .then(data => {
//         const approvedDoctors = data.filter(doctor => doctor.status === 'Approved');
//         setDoctors(approvedDoctors);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="background-radial-gradient overflow-hidden">
//       <div className="doctorsDetails-container">
//         <div className="page-heading">
//           <h2>Doctor Details</h2>
//         </div>
//         <div className="cards">
//           {doctors.map((doctor, index) => (
//             <div key={doctor.id} className="doc-card">
//                   <h5 className="card-title">{doctor.name}</h5>
//                   <p className="card-text">Age: {doctor.age}</p>
//                   <p className="card-text">Gender: {doctor.gender}</p>
//                   <p className="card-text">Specialization: {doctor.specialization}</p>
//                   <p className="card-text">Qualifications: {doctor.qualifications}</p>
//             </div>              
//            ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetAllDoctors;
