  import React, { useState } from "react";
  import './RegisterPatient.css';
  import { Link, useNavigate } from "react-router-dom";
  import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPatient() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    "id": 0,
    "name": "",
    "phoneNumber": "",
    "dateOfBirth": new Date(),
    "age": 0,
    "address": "",
    "users": {
      "id": 0,
      "mail": "",
      "role": "",
      "passwordHash": "",
      "passwordKey": ""
    },
    "password": ""
  });

  const register =(event) => {
    event.preventDefault();
    fetch("http://localhost:5179/api/Hospital/RegisterPatient", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": 'application/json'
      },
      "body": JSON.stringify({ ...user, "user": {} })
    })
      .then(async (data) => {
        if (data.status == 201) 
        {
          toast.success("Successfully Registered",{autoClose : 1000})  
          var myData = await data.json();
          console.log(myData);
          localStorage.setItem("token", myData.token.toString());
          navigate("/getAllDocs");
        }
        else if(data.status == 400)
        {
            toast.error("Invalid Email address",{autoClose : 1000})
        }
        else if(data.status == 500)
        {
          toast.error("Mail address already exist", {autoClose : 1000})
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  const validateAge = () => {
    if (user.age <= 0) {
      setUser({ ...user, age: 0 }); 
      toast.info("Age must be greater than 0", { autoClose: 2000 });
    }
  };

  const validateDateOfBirth = (event) => {
    const enteredDate = new Date(event.target.value);
    const currentDate = new Date();

    if (enteredDate > currentDate) {
      toast.info("Date of birth cannot be on the future", { autoClose: 2000 })
      event.target.value = "";
      setUser({ ...user, "dateOfBirth": "" }); 
    }
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
                <div className="form-row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      style={{ marginRight: '10px' }} // Added margin to the right
                      onChange={(event) => {
                        setUser({ ...user, "name": event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                      style={{ marginLeft: '10px' }} // Added margin to the left
                      onChange={(event) => {
                        setUser({ ...user, "phoneNumber": event.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example3">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="form3Example3"
                      className="form-control"
                      onBlur={validateDateOfBirth} 
                      style={{ marginRight: '10px' }} // Added margin to the right
                      onChange={(event) => {
                        setUser({ ...user, "dateOfBirth": event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example4">
                      Age
                    </label>
                    <input
                      type="number"
                      id="form3Example4"
                      className="form-control"
                      onBlur={validateAge} 
                      style={{ marginLeft: '10px' }} // Added margin to the left
                      onChange={(event) => {
                        setUser({ ...user, "age": event.target.value });
                      }}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example6">
                      Mail
                    </label>
                    <input
                      type="email"
                      id="form3Example6"
                      className="form-control"
                      style={{ marginRight: '10px' }} // Added margin to the right
                      onChange={(event) => {
                        setUser({ ...user, "users": { ...user.users, "mail": event.target.value } });
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example7">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example7"
                      className="form-control"
                      style={{ marginLeft: '10px' }} // Added margin to the left
                      onChange={(event) => {
                        setUser({ ...user, "users": { ...user.users, "password": event.target.value } });
                      }}
                    />
                  </div>
                </div>


                <div className="form-group mb-4">
                  <label className="form-label text-start custom-label" htmlFor="form3Example5">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="form3Example5"
                    rows="3"
                    onChange={(event) => {
                      setUser({ ...user, "address": event.target.value });
                    }}
                  ></textarea>
                </div>

               
                <div className="form-group text-center">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={register}
                    >
                        Register
                    </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPatient;
