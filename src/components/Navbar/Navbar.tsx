import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../css/navbar.css';
import LoginModal from '../Login/LoginModal';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

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
            <button onClick={handleOpenModal} className="fa fa-user-circle-o" aria-hidden="true">

            </button>
            {showModal && (
              <LoginModal 
                show={showModal}
                onHide={handleCloseModal}
              />
            )}
            
            
        </div>
        
     </nav>
    </>
  )
}

export default Navbar