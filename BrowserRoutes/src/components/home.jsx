import React from "react";
import { useNavigate } from "react-router-dom";


function Home(){
    
    const navigate = useNavigate();
    const ToDashboard = ()=>{
        navigate('/dashboard');
    }
    
    return(
        <>
            <div>
                <p>Great Progress Bro You are in Home</p>
                <button onClick={ToDashboard}><h2>Click here to re-direct to dashboard </h2></button>
            </div>
        </>
    )
}

export default Home;