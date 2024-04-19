import React from 'react'
// Import React Icons
import { FaVideo } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
// Import Components...........................
import Messages from './Messages.jsx';
import Input from './Input.jsx';

function Chat() {
  return (
    <>
      <div className='chat'>
        <div className="chatInfo">
          <span>Jane</span>
          <div className="chatIcons">
              <FaVideo className='icons'  />
              <IoPersonAddSharp className='icons' />
              <IoIosMore className='icons' />
          </div>
        
        </div>
              <Messages />
              <Input />
      </div>
    </>
  )
}

export default Chat
