import logo from './logo.svg';
import './App.css';
import ProtectRoute from './compon/ProtectedRoute/ProtectedRoute'
import Root from './compon/Root/Root';
import Error from './compon/Error/Error';
import PlatForms from './compon/PlatForms/PlatForms';
import Sort from './compon/Sort/Sort';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './compon/Register/Register';
import Login from './compon/Login/Login';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import All from './compon/All/All';
import Home from './compon/Home/Home';
import Browser from './compon/Browser/Browser';
import Release from './compon/Sort/Release';
import Popularity from './compon/Sort/Popularity';
import Relevance from './compon/Sort/Relevance';
import Racing from './compon/Categories/Racing';
import Sports from './compon/Categories/Sports';
import Social from './compon/Categories/Social';
import Shooter from './compon/Categories/Shooter';
import Something from './compon/Categories/Something';
import Zombie from './compon/Categories/Zombie';
import World from './compon/Categories/World';
import Fantasy from './compon/Categories/Fantasy';
import Flight from './compon/Categories/Flight';
import Action from './compon/Categories/Action';
import Actionrpg from './compon/Categories/Actionrpg';
import Battle from './compon/Categories/Battle';
import ItmeDetails from './compon/ItmeDetails/ItmeDetails';

function App() {
  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null)
    {
      seveUserData();
    }
  },[])
  const [userData, setuserData] = useState(null)
  function seveUserData()
  {
    let enToken =localStorage.getItem('userToken');
    let deToken =jwtDecode(enToken);
    setuserData(deToken);
  }

  let x =createBrowserRouter([
    {path:'/', element:<Root setuserData={setuserData} userData={userData}/>, children:[
      {path:'login', element:<Login seveUserData={seveUserData}/>},
      {path:'home',element:<ProtectRoute userData={userData}><Home/></ProtectRoute>},
      {path:'all',element:<ProtectRoute userData={userData}><All/></ProtectRoute>},
      {path:'pc',element:<ProtectRoute userData={userData}><PlatForms/></ProtectRoute>},
      {path:'browser',element:<ProtectRoute userData={userData}><Browser/></ProtectRoute>},
      {path:'alphabetical',element:<ProtectRoute userData={userData}><Sort/></ProtectRoute>},
      {path:'release-date',element:<ProtectRoute userData={userData}><Release/></ProtectRoute>},
      {path:'popularity',element:<ProtectRoute userData={userData}><Popularity/></ProtectRoute>},
      {path:'relevance',element:<ProtectRoute userData={userData}><Relevance/></ProtectRoute>},
      {path:'racing',element:<ProtectRoute userData={userData}><Racing/></ProtectRoute>},
      {path:'sports',element:<ProtectRoute userData={userData}><Sports/></ProtectRoute>},
      {path:'action',element:<ProtectRoute userData={userData}><Action/></ProtectRoute>},
      {path:'action-rpg',element:<ProtectRoute userData={userData}><Actionrpg/></ProtectRoute>},
      {path:'shooter',element:<ProtectRoute userData={userData}><Shooter/></ProtectRoute>},
      {path:'Something',element:<ProtectRoute userData={userData}><Something/></ProtectRoute>},
      {path:'social',element:<ProtectRoute userData={userData}><Social/></ProtectRoute>},
      {path:'battle-royale',element:<ProtectRoute userData={userData}><Battle/></ProtectRoute>},
      {path:'fantasy',element:<ProtectRoute userData={userData}><Fantasy/></ProtectRoute>},
      {path:'flight',element:<ProtectRoute userData={userData}><Flight/></ProtectRoute>},
      {path:'open-world',element:<ProtectRoute userData={userData}><World/></ProtectRoute>},
      {path:'zombie',element:<ProtectRoute userData={userData}><Zombie/></ProtectRoute>},
      {path:'itemdetails/:id',element:<ProtectRoute userData={userData}><ItmeDetails/></ProtectRoute>},
      {index:true,element:<Register/>},
      {path:'*',element:<Error/>},
    ]}
  ])
  return <RouterProvider router={x}/>
}

export default App;
