import React from 'react'

/// Imoport Components
import Sidebar from '../componnents/Sidebar.jsx'
import Chat from '../componnents/Chat.jsx'


function Home() {
  return (
    <>
     <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
      </div> 
    </>
  )
}

export default Home
