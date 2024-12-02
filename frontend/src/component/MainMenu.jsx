import React from 'react'
import {Link} from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";

const MainMenu = () => {
  const{logout}=useLogout()
  const {user}=useAuthContext()

  const handleClick=()=>{
    logout()
  }
  return (
    <div className='flex flex-col justify-center items-center gap-5  '>
        <h1 className='text-slate-950 text-4xl font-bold  '>Hello everyone this is the home page .it is accessible for every one !!!!</h1>
        <div className='flex justify-center items-center gap-5 '>
        {!user &&
          <Link to="/signup" className='border-2  border-orange-600 p-3  rounded-md cursor-pointer hover:bg-orange-600 hover:text-white'>Sign up</Link>
              }
            {!user &&
            <Link to="/signin" className='border-2  border-orange-600 p-3  rounded-md cursor-pointer hover:bg-orange-600 hover:text-white'>Sign in</Link>
              }
            {user &&<button onClick={handleClick} className='border-2  border-orange-600 p-3  rounded-md cursor-pointer hover:bg-orange-600 hover:text-white'>Logout</button>
            }
            {user &&<span className='text-orange-600 text-3xl text-bold'>{user.email}</span>}
        </div>
    </div>
  )
}

export default MainMenu