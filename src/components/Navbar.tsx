import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '/logo.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"#020202"}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img 
            src={logo} 
            alt="Finunique Logo" 
            height="64"
            className="py-2 d-inline-block align-top"
          />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <Menu />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto gap-5">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link">Games</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/responsible-gaming" className="nav-link">Responsible Gaming</Link>
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center gap-2">
        <Link to="/login" className="nav-link loginBtn">Login</Link>
        <Link to="/register" className="nav-link loginBtn">Register</Link>


        </div>
      </div>
    </nav>
  );
};