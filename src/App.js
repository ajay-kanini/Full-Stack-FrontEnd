import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import RegisterDoctor from './Components/RegisterDoctor';
import RegisterPatient from './Components/RegisterPatient';
import GetAllDoctors from './Components/GetAllDoctors';
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registerDoc" element={<RegisterDoctor/>}/>
          <Route path="/registerPac" element={<RegisterPatient/>}/>
          <Route path="/getAllDocs" element={<GetAllDoctors/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
