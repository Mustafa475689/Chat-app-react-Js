import React from 'react'

function Navbar() {
  return (
    <>
     <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtZepeGTHRJe3UsB0PWGaMZ1kOZCibvnntQ&usqp=CAU" alt="" />
        <span>john</span>
        <button>logout</button>
      </div>
      </div> 
    </>
  )
}

export default Navbar
