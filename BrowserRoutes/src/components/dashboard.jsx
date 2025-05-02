import React from "react";
import { useNavigate } from "react-router-dom";


function Dashboard(){
    
    const navigate = useNavigate();
    const ToHome = ()=>{
        navigate('/home');
    }
    
    return(
        <>
            <div>
                <h1>Great Progress Bro You are in DASHBOARD</h1>
                <button onClick={ToHome}><h2>Click here to re-direct to Home </h2></button>
            </div>
        </>
    )
}

export default Dashboard;