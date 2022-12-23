import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItmeDetails() {
    const [GameId1 , setGameId1] = useState([]);
    async function getGameDetails(id)
    {
      let {data}= await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game",{
        headers : {
            'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
      params: {id:`${id}`}
    })
    setGameId1(data);
    console.log(data);
    }
    let {id}= useParams();
    useEffect(()=>{
      getGameDetails(id)
    }, []);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1800);
    }, []);

  return (
    <>
    <section className='my-5'>
    <div className="container">
    {loading ? (<i className=' text-muted fas fa-spinner fa-spin fa-4x d-flex justify-content-center align-items-center'></i>) :
        <div className="row">
            <div className="col-md-4">
             <img src={GameId1.thumbnail} className='w-100 mb-1 rounded-2'/> 
             <div className='mt-1 d-flex justify-content-between '>
               <div className='col-3 col-lg-2 me-2'>
               <p className='bg-2 shadow h-100 d-flex justify-content-center align-items-center rounded-2'>Free</p>
               </div>
               <a className="btn btn-primary w-75 col me-0 pe-0" href={GameId1.freetogame_profile_url}>
               <strong>PLAY NOW </strong>
               <i className="fas fa-sign-out-alt"></i>
               </a>
             </div>
            </div>
            <div className="col-md-8">
                <div>
                    <h1 className='text-white-50'>{GameId1.title}</h1>
                    <h5 className='text-white-50'> About {GameId1.title}</h5>
                    <p className='text-white-50'>{GameId1.description}</p>
                    {GameId1.minimum_system_requirements?<>
                    <h5 className='text-white-50'> minimum_system_requirements</h5>
                    <ul className='list-unstyled ms-2 text-white-50'>
                        <li>
                          <strong>graphics : </strong>
                          {GameId1.minimum_system_requirements.graphics}
                        </li>
                        <li>
                          <strong>memory : </strong>
                          {GameId1.minimum_system_requirements.memory}
                        </li>
                        <li>
                          <strong>os :  </strong>
                          {GameId1.minimum_system_requirements.os}
                        </li>
                        <li>
                          <strong>processor : </strong>
                          {GameId1.minimum_system_requirements.processor}
                        </li>
                        <li>
                          <strong>storage  : </strong>
                          {GameId1.minimum_system_requirements.storage }
                        </li>
                    </ul>
                    </>:''}
                    {GameId1.screenshots[0]?<>
                    <h4 className='text-white-50'>{GameId1.title} Screenshots</h4>
                    <div className='row text-center text-lg-left'>
                      <div className='col-lg-4 col-md-12 col-6 mt-2'>
                      <img src={GameId1.screenshots[0].image} className='thumb-gallery shadow-sm rounded w-100'/>
                      </div>
                      <div className='col-lg-4 col-md-12 col-6 mt-2'>
                      <img src={GameId1.screenshots[1].image} className='thumb-gallery shadow-sm rounded w-100'/>
                      </div>
                      <div className='col-lg-4 col-md-12 col-6 mt-2'>
                      <img src={GameId1.screenshots[2].image} className='thumb-gallery shadow-sm rounded w-100'/>
                      </div>
                    </div>
                    </>:''}
                    <h2 className='text-white-50'>Additional Information</h2>
                    <hr className="mt-2 mb-3 text-white-50"/>
                    <div className='row'>
                    <div className='col-6 col-md-4'>
                       <strong className='text-muted'>Title </strong>
                       <p className='text-white-50'>{GameId1.title}</p>
                    </div>
                    <div className='col-6 col-md-4'>
                       <strong className='text-muted'>Developer </strong>
                       <p className='text-white-50'>{GameId1.developer}</p>
                    </div>
                    <div className='col-6 col-md-4'>
                       <strong className='text-muted'>Publisher </strong>
                       <p className='text-white-50'>{GameId1.publisher}</p>
                    </div>
                    <div className='col-6 col-md-4'>
                       <strong className='text-muted'>Release Date  </strong>
                       <p className='text-white-50'>{GameId1.release_date}</p>
                    </div>
                    <div className='col-6 col-md-4'>
                       <strong className='text-muted'>Genre </strong>
                       <p className='text-white-50'>{GameId1.genre}</p>
                    </div>
                    <div className='col-6 col-md-4'>
                       <strong className='text-muted'>Platform </strong>
                       <br/>
                       <div className='text-white-50'>
                       {GameId1.platform==="Windows" ?<i className="fab fa-windows text-muted  pe-2"></i>:<i className="fas fa-window-maximize text-muted pe-2"></i>}
                       {GameId1.platform}
                        </div>                       
                    </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    </section>
    </>
  )
}
