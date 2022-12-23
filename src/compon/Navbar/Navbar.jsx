import React from 'react'
import { Link } from 'react-router-dom'
import log from '../img/logo.png'
import navbar from './Navbar.module.css'
export default function Navbar({userData,logOut}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <img src={log} className={`${navbar.siz}`}/>
    <a className={`${navbar.ft} navbar-brand`} href="#">Game Over</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
      {userData?
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all">ALL</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='pc' >Pc</Link></li>
            <li><Link className="dropdown-item" to='browser'>browser</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            sort-by
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='release-date'>release-date</Link></li>
            <li><Link className="dropdown-item" to='popularity'>popularity</Link></li>
            <li><Link className="dropdown-item" to='alphabetical'>alphabetical</Link></li>
            <li><Link className="dropdown-item" to='relevance'>relevance</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='racing'>racing</Link></li>
            <li><Link className="dropdown-item" to='sports'>sports</Link></li>
            <li><Link className="dropdown-item" to='social'>social</Link></li>
            <li><Link className="dropdown-item" to='shooter'>shooter</Link></li>
            <li><Link className="dropdown-item" to='open-world'>open-world</Link></li>
            <li><Link className="dropdown-item" to='zombie'>zombie</Link></li>
            <li><Link className="dropdown-item" to='fantasy'>fantasy</Link></li>
            <li><Link className="dropdown-item" to='action-rpg'>action-rpg</Link></li>
            <li><Link className="dropdown-item" to='action'>action</Link></li>
            <li><Link className="dropdown-item" to='flight'>flight</Link></li>
            <li><Link className="dropdown-item" to='battle-royale'>battle-royale</Link></li>
            <li><Link className="dropdown-item" to='Something'>Something else here</Link></li>
          </ul>
        </li>
      </ul>:''}
    </div>
    {userData?
    <button type="button" onClick={logOut} className="btn btn-outline-primary">Log out</button>:''}
    {userData?'':<>
    <Link className={`navbar-brand text-white-50`} to='login'>Login</Link>
    <Link type="button" className="btn btn-outline-primary" to='/'>Join Free</Link>
    </>}
  </div>
</nav>
    </>
  )
}
