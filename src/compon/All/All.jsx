import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { slice } from 'lodash'

import Mediaitem from '../Mediaitem/Mediaitem';


export default function All() {
    const [game, setGame] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(20)
    const initialPosts = slice(game, 0, index)
    async function getAllGames()
    {
        let {data}= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
            headers : {
                'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }    
        })
        setGame(data)
        console.log(data)
    }
    useEffect(()=>{
      getAllGames()
    },[]);

    const loadMore = () => {
      setIndex(index + 20)
      console.log(index)
      if (index >= game.length) {
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
    {loading ? (<i className='text-muted fas fa-spinner fa-spin fa-4x d-flex justify-content-center align-items-center'></i>) :
      <div className="row">
        {initialPosts.map((item,index)=><Mediaitem key={index} item={item}/>)}
      </div>}
      <div className='text-center mb-3'>
         <button onClick={loadMore} className='btn btn-outline-secondary'>More Games{'>'}
         </button>
      </div>
    </div>
    </>
  )
}
