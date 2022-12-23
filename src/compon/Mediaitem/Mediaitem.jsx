import React from 'react'
import { Link } from 'react-router-dom'

export default function Mediaitem({item}) {
  return (
    <>
    <div className="col-md-3 mb-4">
      <Link to={`/itemdetails/${item.id}`} className='text-decoration-none'>
        <div className='shadow '>
            <img src={item.thumbnail} className='w-100'/>
            <div className='bg-dark px-2 h-25 position-relative m-2 pb-2'>
               <h3 className='text-secondary h4'>{item.title.slice(0, 13)}</h3>
               <p className='text-muted'>{item.short_description.slice(0, 25)}...</p>
               <div className="d-flex justify-content-between">
                <i className="fas fa-plus-square text-muted"></i>
                <div className="d-flex mb-n2 justify-content-between align-items-center">
                    <span className="badge badge-secondary bg-secondary text-dark me-2 rounded-4">{item.genre}</span>
                    {item.platform==="PC (Windows)" ?<i className="fab fa-windows text-muted stretched-link"></i>:<i className="fas fa-window-maximize text-muted stretched-link"></i>}
                </div>
               </div>
               <div className='bg text-white position-absolute top-0 end-0 rounded-2 p-1'> Free</div>
            </div>
        </div>
        </Link>
    </div>
    </>
  )
}
