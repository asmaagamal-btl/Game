import React, { useEffect, useState } from 'react'
import axios from 'axios';
import background from '../img/paladins.b44d33d6e7ee1ba8.png'
import { Link } from 'react-router-dom';


export default function Home() {
  const [GameId1 , setGameId1] = useState([]);
  const [gameId2 , setGameId2] = useState([]);
  const [gameId3 , setGameId3] = useState([]);

  async function getGameDetails(id,callbak)
  {
    let {data}= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game",{
      headers : {
          'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
    params: {id:`${id}`}
  })
  callbak(data);
  console.log(data);
  }
  useEffect(()=>{
    getGameDetails("475", setGameId1 )
    getGameDetails("365", setGameId2 )
    getGameDetails("523", setGameId3 )
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 180);
  }, []);

  return (
    <>
    <div className="container-fluid mt-3 shadow">
      <div style={{ backgroundImage: `url(${background})` }} className="text-center py-5">
        <div className='py-3'>
        <h3 className='text-secondary'>Find & track the best 
          <span className='text-primary'> free-to-play</span> games!
        </h3>
        <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link className='btn btn-outline-secondary' to='/all'>Browse Games</Link>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <h3 className='text-secondary'>
      <i className="fas fa-robot mr-2"></i>
      Personalized Recommendations</h3>
      {loading ? (<i className='text-muted fas fa-spinner fa-spin fa-4x d-flex justify-content-center align-items-center'></i>) :
      <Link to={`/itemdetails/${GameId1.id}`} className='text-decoration-none'>
      <div className="row mt-4">
        <div className="col-md-4">
        <div className='shadow '>
            <img src={GameId1.thumbnail} className='w-100'/>
            <div className='bg-dark px-2 h-25 position-relative m-2 p-2'>
               <h3 className='text-secondary h4'>{GameId1.title}</h3>
               <div className='bg text-white position-absolute top-0 end-0 rounded-2 p-1'> Free</div>
            </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className='shadow '>
            <img src={gameId2.thumbnail} className='w-100'/>
            <div className='bg-dark px-2 h-25 position-relative m-2 p-2'>
               <h3 className='text-secondary h4'>{gameId2.title}</h3>
               <div className='bg text-white position-absolute top-0 end-0 rounded-2 p-1'> Free</div>
            </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className='shadow '>
            <img src={gameId3.thumbnail} className='w-100'/>
            <div className='bg-dark px-2 h-25 position-relative m-2 p-2'>
               <h3 className='text-secondary h4'>{gameId3.title}</h3>
               <div className='bg text-white position-absolute top-0 end-0 rounded-2 p-1'> Free</div>
            </div>
        </div>
        </div>
      </div>
      </Link>}
    </div>
    </>
  )
}
