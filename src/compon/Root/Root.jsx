import React from 'react'
import { Outlet ,useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Root({userData,setuserData}) {
  let x=useNavigate();
  function logOut() 
  {
    localStorage.removeItem('userToken');
    setuserData(null);
    x('login')
  }
  return (
    <>
    <Navbar logOut={logOut} userData={userData}/>
    <Outlet></Outlet>
    </>
  )
}
