import React from 'react'
// Import React Icons
import { IoMdAttach } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";


function Input() {
  return (
    <>
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <IoMdAttach className='icons' />
        <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file">
            <LuImagePlus className='icons' />
        </label>
        <button>send</button>
      </div>
      </div>
    </>
  )
}

export default Input
