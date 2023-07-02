// import React, { useState, useEffect } from 'react';
// import './UpdateDoctor.css';

// function UpdateDoctor() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     fetchNotApproved();
//   }, []);

//   const fetchNotApproved = () => {
//     fetch('http://localhost:5179/api/Hospital/GetDoctorDetails')
//       .then(response => response.json())
//       .then(data => {
//         setDoctors(data);
//       })
//       .catch(error => console.log(error));
//   };

//   const handleStatusChange = (id) => {
//     fetch("http://localhost:5179/api/Hospital/UpdateDoctorStatus", {
//       method: "PUT",
//       headers: {
//         "Accept": "text/plain",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ "id": id })
//     })
//       .then(async (data) => {
//         if (data.status === 201) {
//           var myData = await data.json();
//           console.log(myData);
//         }
//         fetchNotApproved();
//       })
//       .catch((err) => {
//         console.log(err.error);
//       });
//   };

//   return (
//     <section className="background-radial-gradient">
//       <div className="scrollable-container">
//         <div className="doctors-container">
//           <div className="page-heading">
//             <h2>Doctor Details</h2>
//           </div>
//           <div className="cards">
//             {doctors.map((doctor, index) => (
//               <div key={doctor.id} className={`card card-${index + 1}`}>
//                 <div className="card-body">
//                   <h5 className="card-title">{doctor.name}</h5>
//                   <p className="card-text">Age: {doctor.age}</p>
//                   <p className="card-text">Specialization: {doctor.specialization}</p>
//                   <p className="card-text">Qualifications: {doctor.qualifications}</p>
//                   <p className="card-text">Status: {doctor.status}</p>
//                   <hr />
//                   <button
//                     className="change-status-btn"
//                     onClick={() => handleStatusChange(doctor.id)}
//                   >
//                     Change Status
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UpdateDoctor;
