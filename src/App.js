import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import RegisterDoctor from './Components/RegisterDoctor';
import RegisterPatient from './Components/RegisterPatient';
import GetAllDoctors from './Components/GetAllDoctors';
import UpdateDoctor from './Components/UpdateDoctor';
import DoctorDetails from './Components/DoctorDetails';
import { ToastContainer } from 'react-toastify';
import Admin from './Protected/Admin';
import Doctor from './Protected/Doctor';
import Patient from './Protected/Patient';
import Notify from './Protected/Notify';
import Message from './Components/Message';
function App() {
  return (
    <BrowserRouter>
    <div>
      <ToastContainer theme='colored'></ToastContainer>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/registerDoc" element={<RegisterDoctor/>}/>
          <Route path="/registerPac" element={<RegisterPatient/>}/>

          <Route path="/message" element={
            <Notify role={localStorage.getItem('role')}> <Message/> </Notify>
          }/>
          <Route path="/getAllDocs" element={
            <Patient role={localStorage.getItem('role')}> <GetAllDoctors/> </Patient>}/>
           <Route path="/updateDocs" element={
            <Admin role={localStorage.getItem('role')}> <UpdateDoctor/> </Admin> }/>   
          <Route path="/doctorDetails" element={
            <Doctor role={localStorage.getItem('role')}> <DoctorDetails/> </Doctor> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
