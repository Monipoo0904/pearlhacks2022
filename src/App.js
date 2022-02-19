// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// import { navbar } from './components';
import Home from './views/Home';

const App = () => {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://i.pinimg.com/474x/75/4a/7d/754a7d80ff30b6dcb2df5423ac60cec2.jpg' className="App-logo" alt="logo" />
        
      </header>

      <Routes>
          <Route path="/" exact component={Home} />
         
       </Routes>

    </div>
  );
}

export default App;
