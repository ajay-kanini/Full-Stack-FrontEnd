import { Navigate, useNavigate } from "react-router-dom";

function Admin({role, children})
{
    if(localStorage.getItem('role')!= null && localStorage.getItem('role') === "Admin")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default Admin;