import { Navigate } from "react-router-dom";
import DoctorDetails from "../Components/DoctorDetails";

function Doctor({role, children})
{
    if(localStorage.getItem('role')!= null && localStorage.getItem('role') === "Doctor")
    {
        console.log("S");
        return children
    }
    return <Navigate to="/"/>
}

export default Doctor;