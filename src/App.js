// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login-button';

import  NavBar from "./components/nav-bar";
import Home from './Home';
import Foodie from './foodie';
import Talk from './talk';
import LogoutButton from './components/Logout-button';
import Profile from './components/Profile'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       {/* <NavBar /> */}

        <img src='https://i.pinimg.com/474x/75/4a/7d/754a7d80ff30b6dcb2df5423ac60cec2.jpg' className="App-logo" alt="logo" />
        <>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>

        </>
   <h3>What's to come!!!</h3>
  <img  src="phone.png" className='phone' alt='whats to come'></img> 
      </header>
      {/* <BrowserRouter> */}
      <Routes>
          <Route exact path="/home" component={<Home/>} />
          <Route exact path="/food" component={<Foodie/>}/>
          <Route exact path="/talk" component={<Talk/>}/>
          {/* <Route path='/profile' exact component={<Profile/>}/> */}

       </Routes>
 {/* </BrowserRouter>  */}

    </div>
  );
}

export default App;
