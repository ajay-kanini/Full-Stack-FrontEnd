import { Navigate, useNavigate } from "react-router-dom";
import UpdateDoctor from "../Components/UpdateDoctor";

function Admin({role, children})
{
    if(localStorage.getItem('role')!= null && localStorage.getItem('role') === "Admin")
    {
        console.log("S");
        return children;
    }
    return <Navigate to="/"/>
}

export default Admin;