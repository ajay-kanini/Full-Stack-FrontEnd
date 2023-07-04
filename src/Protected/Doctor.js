import { Navigate } from "react-router-dom";

function Doctor({role, children})
{
    if(localStorage.getItem('role')!= null && localStorage.getItem('role') === "Doctor")
    {
        return children
    }
    return <Navigate to="/"/>
}

export default Doctor;