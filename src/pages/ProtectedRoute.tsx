import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function ProtectedRoute(){
    const jwt = sessionStorage.getItem("accessToken");
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(jwt);

        if(!jwt){
            navigate("/login");
        }
    },[jwt, navigate]);

    return (
        <>
            <Outlet></Outlet>
        </>
    )
}