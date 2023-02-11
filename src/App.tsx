import React from 'react';
import {BrowserRouter, Routes, Route, RouteProps} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginModal from './components/Login/LoginModal';
import HomeComponent from './components/Home/Home';
import MovieComponent from "./components/Movies/Movies";
import TvComponent from './components/TVShows/TVShows';
import AnimeComponent from './components/Anime/Anime';
import Signup from './components/Signup/Signup';
import './App.css';

interface AppProps {
  // show: boolean;
  // onHide: () => void;
}

interface AppState {
  // showModal: boolean;
  // darkenBackground: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      showModal: false,
      darkenBackground: false
    };
  }

  // handleOpenModal = () => {
  //   this.setState({ showModal: true, darkenBackground: true});
  // }

  // handleCloseModal = () => {
  //   this.setState({ showModal: false, darkenBackground: false});
  // }
  render() {
  //   const {darkenBackground} = this.state;
  //   let className = 'app-container';
  //   if(darkenBackground) {
  //     className += 'darken-background';
    
  // }
  return (
     
  <BrowserRouter>
    <div className="app">
      
      <Navbar/>
      
      <Routes>
       
        <Route path='/home' element={ <HomeComponent/>} />
        <Route path='/movies'  element={ <MovieComponent/> } />
        <Route path='/tv-shows'  element= { <TvComponent/> } />
        <Route path='/anime'  element = { <AnimeComponent/> } />
        {/* <Route path='/profile'  element={ <LoginModal show={false} onHide={() => console.log('LoginModal hidden')} /> } /> */}
        <Route path='/signup' element={<Signup/>} />
        
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}
}

export default App;
