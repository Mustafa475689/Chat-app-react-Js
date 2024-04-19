import React from 'react'

// Import NAVBAR
import Navbar from '../componnents/Navbar.jsx'
// Import SEARCH 
import Search from '../componnents/Search.jsx'
// Import CHATS
import Chats from '../componnents/Chats.jsx'

function Sidebar() {
  return (
    <>
       <div className='sidebar'>
        <Navbar/>
        <Search/>
        <Chats/>
        </div>
    </>
  )
}

export default Sidebar
