import React, { useState } from 'react';
import './RegisterDoctor.css';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function RegisterDoctor() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    "id": 0,
    "name": "",
    "dateOfBirth": new Date(),
    "age": 0,
    "gender": "",
    "specialization": "",
    "qualifications": "",
    "phoneNumber": "",
    "address": "",
    "status": "",
    "users": {
      "id": 0,
      "mail": "",
      "role": "",
      "passwordHash": "",
      "passwordKey": ""
    },
    "password": ""
  });
  var register =  (event) => {
    event.preventDefault();
    fetch("http://localhost:5179/api/Hospital/RegisterDoctor", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": 'application/json'
      },
      "body": JSON.stringify({ ...user, "user": {} })
    })
      .then(async (data) => {
        if (data.status == 201) {
          toast.success("Successfully Registered")  
          var myData = await data.json();
          console.log(myData);
          localStorage.setItem("token", myData.token.toString());
          navigate("/doctorDetails")
        }
        else if(data.status == 400)
        {
            toast.error("Invalid Email address")
        }
        else if(data.status == 500)
        {
          toast.error("Mail address already exist")
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight text-left">
              Welcome to Our Hospital <br />
              <span>Providing Quality Healthcare</span>
            </h1>
            <p className="mb-4 opacity-70 text-left" style={{ textAlign: 'justify' }}>
              We are dedicated to providing exceptional healthcare services to our patients.
              Our team of skilled professionals is committed to your well-being and ensuring
              the highest standards of medical care. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi
              dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "name": event.target.value });
                        }}
                      />
                    </div>

                    <div className="form-col">
                      <label className="form-label" htmlFor="dateOfBirth">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "dateOfBirth": event.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="gender">
                        Gender
                      </label>
                      <input
                        type="text"
                        id="gender"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "gender": event.target.value });
                        }}
                      />
                    </div>

                    <div className="form-col">
                      <label className="form-label" htmlFor="specialization">
                        Specialization
                      </label>
                      <input
                        type="text"
                        id="specialization"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "specialization": event.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="qualifications">
                        Qualifications
                      </label>
                      <input
                        type="text"
                        id="qualifications"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "qualifications": event.target.value });
                        }}
                      />
                    </div>

                    <div className="form-col">
                      <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "phoneNumber": event.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="age">
                        Age
                      </label>
                      <input
                        type="text"
                        id="age"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "age": event.target.value });
                         }}
                      />
                    </div>

                    <div className="form-col">
                      <label className="form-label" htmlFor="mail">
                        Mail
                      </label>
                      <input
                        type="text"
                        id="mail"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, users: { ...user.users, "mail": event.target.value } });
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-col">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <textarea
                      className="form-control textarea-input"
                      id="address"
                      rows="1"
                      style={{ height: '55px' }}
                      onChange={(event) => {
                        setUser({ ...user, "address": event.target.value });
                      }}
                    ></textarea>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="password" style={{marginTop:"10px"}}>
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        onChange={(event) => {
                          setUser({ ...user, "password": event.target.value  });
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={register}
                      style={{ position: 'relative', top: '25px', left: '5px' }}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterDoctor;
