import { Navigate, useNavigate } from "react-router-dom";

function Notify({role, children})
{
    if(localStorage.getItem('role')!= null && localStorage.getItem('role') === "Doctor")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default Notify;