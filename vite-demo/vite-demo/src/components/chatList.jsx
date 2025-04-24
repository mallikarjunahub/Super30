import React from 'react'
import "../App.css"
import logo from "../assets/react.svg"
import wplogo from "../assets/wp.jpg"


const chatmenu = ["add", "menu"]
const chatOptions = ["All","unread","Favourites","Groups"]

function chatList() {
  return (
    <div className='w-3/5 relative border-r border-r-neutral-300'>
        <div className="flex justify-between w-full p-4">
            <div>Chats</div>
            <ChatMenu data={chatmenu} />      
        </div>

        <div className="search_bar w-full px-2">
            <input type="text" className='w-full bg-gray-100 rounded-md p-1 outline-none' placeholder='search'/>
        </div>

        <ChatsOptions data= {chatOptions} />
        <SingleChat />
        <div className="w-full absolute bottom-0 items-center gap-3 px-2 flex justify-center h-[60px] bg-stone-50">
            <img src={wplogo} alt="wp logo" className='w-[40px] rounded-sm'/>
            <span className='text-emerald-500 text-lg'>Get Whatsapp for Windows</span>
        </div>

    </div>

  )
}

const ChatMenu = ({data,flexdir})=>      
    <div className={`flex ${flexdir} justify-start gap-3 pl-2 w-[100px]`}>
        {data.map((item) =><div>{item}</div>)}</div>

const ChatsOptions = ({data})=>      
    <div className='flex justify-around w-3/4 p-2'>
        {data.map((item) =><div className="bg-gray-100 px-3 py-1 rounded-full">{item}</div>)}</div>

const SingleChat = ()=>{
    const singleChatValues=[{dp:{logo},name:"Malli",msg:"good morning",time:"08:00"},
        {dp:{logo},name:"Super30",msg:"Assignment completed?",time:"08:00"},
        {dp:{logo},name:"Niharrrr",msg:"github URL",time:"08:00"},
        {dp:{logo},name:"Harsha",msg:"Nice session bro",time:"08:00"},
        {dp:{logo},name:"Sai",msg:"miss you bro",time:"08:00"},
        {dp:{logo},name:"Gnaneswar",msg:"Ardam ayyindhi bro",time:"08:00"},
        {dp:{logo},name:"Malli",msg:"react notes",time:"08:00"}
    ];

    return(
        <div>
            {singleChatValues.map((item) =>{
                return(
                    <div className='flex w-full px-2 justify-start gap-2 p-2 border-b border-b-gray-300'>
                        <div className='pt-2 px-2'>
                            <img src={item.dp.logo} alt="" />
                        </div>
                        <div className='w-full'>
                            <div className='w-full flex justify-between pr-4'>
                                <span>{item.name}</span>
                                <span className='text-sm'>{item.time}</span>
                            </div>
                            <p className='block text-sm'>{item.msg}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};



export default chatList;
