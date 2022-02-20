// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

import  NavBar from "./components/nav-bar";
import Home from './views/Home';
import Foodie from './views/foodie';
import Talk from './views/talk';
// import Profile from './views/profile'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
        <img src='https://i.pinimg.com/474x/75/4a/7d/754a7d80ff30b6dcb2df5423ac60cec2.jpg' className="App-logo" alt="logo" />
        
      </header>
      <Routes>
          <Route path="/home" exact component={<Home/>} />
          <Route path="/food" exact component={<Foodie/>}/>
          <Route path="talk" exact component={<Talk/>}/>
          {/* <Route path='/profile' exact component={<Profile/>}/> */}

         
       </Routes>
    </div>
  );
}

export default App;
