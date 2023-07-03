import { Navigate } from "react-router-dom";
import GetAllDoctors from "../Components/GetAllDoctors";

function Patient({role, children})
{
    if(localStorage.getItem('role')!= null && localStorage.getItem('role') === "Patient")
    {
        
        return children
    }
    return <Navigate to="/"/>
}

export default Patient;