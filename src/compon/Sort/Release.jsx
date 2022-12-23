import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { slice } from 'lodash';
import Mediaitem from '../Mediaitem/Mediaitem';

export default function Release() {
  const [Game, setGame] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(20)
  const initialPosts = slice(Game, 0, index)
  async function getSortedGames(x)
  {
      let {data}= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
          headers : {
              'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          },
          params : {'sort-by':`${x}`} 
      })
      setGame(data);
      console.log(data)
  }
  useEffect(()=>{
    getSortedGames('release-date')
  },[]);

  const loadMore = () => {
    setIndex(index + 20)
    console.log(index)
    if (index >= Game.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 180);
  }, []);

  return (
    <>
      <div className="container mt-3">
      {loading ? (<i className=' text-muted fas fa-spinner fa-spin fa-4x d-flex justify-content-center align-items-center'></i>) :
        <div className="row">
          {initialPosts.map((item ,index)=> <Mediaitem key={index} item={item}/>)}
        </div>}
        <div className='text-center mb-3'>
         <button onClick={loadMore} className='btn btn-outline-secondary'>More Games{'>'}
         </button>
      </div>
      </div>
    </>
  )
}
