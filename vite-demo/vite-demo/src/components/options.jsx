import React from "react";
import "../App.css"

const optionList =["chats", "status", "channels", "communities", "meta Ai"]
const dpList=["settings","dp"]

const options =()=>{
    return (
        <div id="wp_options" className="bg-gray-100 border-r border-r-neutral-300 h-dvh w-[100px] flex flex-col justify-between">
            <OptionsMenu data= {optionList} flexdir="flex-col" />        
            <OptionsMenu data= {dpList} flexdir="flex-col" />
            </div>
    )
};

const OptionsMenu = ({data,flexdir})=>      
        <div className={`flex ${flexdir} justify-start gap-3 pl-2 pt-2 w-[100px]`}>
            {data.map((item,index) =><div key={index}>{item}</div>)}</div>

export default options;

