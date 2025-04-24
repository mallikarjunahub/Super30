import React from 'react'
import logo from "../assets/react.svg"
import chat from "../assets/chat.png"

function chatDetails() {
  return (
    <div className='w-full'>
        <div className='h-[60px] bg-gray-100 grid grid-cols-12'>
            <div className='flex items-center justify-center'>
                <img src={logo} alt="chat details logo" />
            </div>
            <div className='col-span-8 flex items-center'>Super 30</div>
            <div className='flex col-span-3 items-center justify-evenly'>
                <div>call</div>
                <div>search</div>
                <div>menu</div>
            </div>

        </div >
            
        <div>
            <img src={chat} alt="" className='w-[740px] h-[464px]'/>
        </div>
        <div className='h-[60px] bg-gray-100 grid gap-3 items-center grid-cols-12'>
            <div>add</div> 
            <div className='col-span-9'>
                <input type="text" className='w-full rounded-md p-1 bg-stone-50' placeholder='Type a message'/>
            </div>
            <div>listen</div> 
        </div>
    </div>
  )
}

export default chatDetails

