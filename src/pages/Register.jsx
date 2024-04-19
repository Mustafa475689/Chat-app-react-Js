import React, { useState } from 'react'
import addAvatar from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Register() {
 
// usestate
const [err, setErr] = useState(false)
// function for form onSubmit
const handleSubmit = async (e)=>{
  e.preventDefault()
  //console.log(e.target[0].value)
  ///////////////
  // Making variables
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;
  const file = e.target[3].file[0];

  try{

    const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(

  (error) => {
setErr(true)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      //console.log('File available at', downloadURL);
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,

      });
    });
  }
);
/////////////////////////////////////////////////

  }catch(err){
setErr(true);
  }

};

  return (
    <>
     <div className='formContainer'>
     <div className='formWrapper'>
       <span className='logo'>Chat app</span>
       <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="file" id='file' />
            <label htmlFor='file'>
              <img src={addAvatar} alt="" />
              <span>Add an avatar</span>
            </label>
            <button >Sign up</button>
        {err && <span>somthing went wrong</span>}
        </form>
        <p>Do you have an account? Login</p>
     </div>
        </div> 
    </>
  )
}

export default Register
