import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from "./Login-button";
import SignupButton from "./signup-button";
import LogoutButton from "./Logout-button";




const MainNav = () => {
    return(
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          
            <div className="container" >
            <NavLink to="/" className="navbar-brand">Start</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/talk" className="nav-link">Talk About It</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/profile" className="nav-link">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
}
  



const AuthNav = () => {
    const {isAuthenticated} = useAuth0;

    return (
        < Nav className = "justify-content-end">
            {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </Nav>
    );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;