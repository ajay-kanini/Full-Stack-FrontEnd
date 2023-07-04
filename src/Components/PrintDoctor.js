import React from "react";
import { useState, useEffect } from 'react';

function PrintDoctor(props)
{
    const [doctor, setDoctor] = useState(props.object);
    return(
    <div className="cards">
        <div className="doc-card">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">Age: {doctor.age}</p>
                <p className="card-text">Gender: {doctor.gender}</p>
                <p className="card-text">Specialization: {doctor.specialization}</p>
                <p className="card-text">Qualifications: {doctor.qualifications}</p>
        </div>              
       
    </div> 
    );
}
export default PrintDoctor;