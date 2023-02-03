import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../css/navbar.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            
            <Link to="/" className="movi-logo"><img src='logo_200x200.png'></img> </Link>
            <Link to="/home" className="homeBtn">HOME</Link>
            <Link to="/movies" className="movieBtn">MOVIES</Link>
            <Link to="/tv-shows" className="tvShowsBtn">TV SHOWS</Link>
            <Link to="/anime" className="animeBtn">ANIME</Link>

            
            <Link to="/profile" className="profile" ><i className="fa fa-user-circle-o" aria-hidden="true"></i></Link>
                
            
            
        </div>
     </nav>
    </>
  )
}

export default Navbar