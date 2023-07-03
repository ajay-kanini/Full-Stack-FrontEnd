import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
    const [user,setUser] = useState({
      "mail": "",
      "id": 0,
      "password": "",
      "role": "",
      "token": ""
    });

    var login = ()=>{
      fetch("http://localhost:5179/api/Hospital/Login",{
        "method":"POST",
        headers:{
            "accept": "text/plain",
            "Content-Type": 'application/json'
        },
        "body":JSON.stringify({...user,"user":{} })})
        .then(async (data)=>{ 
        if(data.status == 201)
        {
            toast.success("Hi")
            var myData = await data.json();
            console.log(myData); 
            localStorage.setItem("Id" , myData.id.toString());
            localStorage.setItem("token" , myData.token.toString());
            if(myData.role=="Admin")
            {
              navigate("/updateDocs")
            }
            else if(myData.role=="Patient")
            {
              navigate("/getAllDocs")
            }
            else if(myData.role=="Doctor")
            {
              navigate("/doctorDetails")
            }         
        }
        else 
        {
          toast.error("Invalid Username or Password")
        }
      }).catch((err)=>{
        console.log(err.error)
      })
    }
  return (
    <>
    <NavBar/>
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

            <div className="card bg-glass"  >
              <div className="card-body px-4 py-5 px-md-5">
                <div className="form-outline mb-4">
                   <label className="form-label text-start custom-label" htmlFor="form3Example3">
                        Email address
                    </label>
                    <input type="email" id="form3Example3" className="form-control" onChange={(event)=>{
                      setUser({...user, "mail":event.target.value}) }} />
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                    <label className="form-label text-start custom-label" htmlFor="form3Example4">
                        Password
                    </label>
                    <input type="password" id="form3Example4" className="form-control" onChange={(event)=>{
                    setUser({...user, "password":(event.target.value)})}}/>
                    </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={login}>
                      Sign In
                    </button>
                  </div>

                  <div className="text-center">
                    <p>or sign up with:</p>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                     <Link to="/registerDoc" className="btn"  style={{color:"white"}}>Register as Doctor </Link>
                    </button>
                     &nbsp;&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary btn-block mb-4" >
                    <Link to="/registerPac" className="btn" style={{color:"white"}}>Register as Patient </Link>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default Login;
