import React from 'react'

function Login() {
  return (
    <>
     <div className='formContainer'>
     <div className='formWrapper'>
       <span className='logo'>Chat app</span>
       <span className='title'>Register</span>
        <form >
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button >Sign in</button>
        </form>
        <p>You don't have an account? Signup</p>
     </div>
        </div> 
    </>
  )
}

export default Login
