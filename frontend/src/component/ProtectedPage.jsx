import React ,{useEffect} from 'react'
import {Link} from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import axios from "axios";

const MainMenu = () => {
    const {user}=useAuthContext()
  useEffect(()=>{
    const fetch=async()=>{
    try{
    const response = await axios.get("http://localhost:5000/api/users/test", {
        headers: {
          Authorization: 'Bearer '+user.user,
        },
      });
      console.log(response)

    }catch(err){
        console.log(err)
    }
    }
    if(user){fetch()}
},[user])
  return (
    <div className='flex flex-col justify-center items-center gap-5  '>
        <h1 className='text-slate-950 text-4xl font-bold  '>Mala T5azwi9a ya Ze5iiiiii !!!!!!!</h1>
        <div className='flex justify-center items-center gap-5 '>
          <Link to="/" className='border-2  border-orange-600 p-3  rounded-md cursor-pointer hover:bg-orange-600 hover:text-white'>Home Page</Link>
        </div>
    </div>
  )
}

export default MainMenu