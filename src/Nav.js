import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav className='nav'
        style={{
            display: 'flex',
            marginRight: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '80px'
        }} >
            <div>
                <img className="navLogo" src={process.env.PUBLIC_URL + "/Main logo.png"} height="40px" alt="logo" />
            </div>
            <div className="menuBar" 
            >
            <ul className="navElements" style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '18px'
                        }}>
                <Link to="/" className="active">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/booking">Reservations</Link>
                <Link to="/order-online">Order Online</Link>
                <Link to="/login">Login</Link>
                </ul>
        </div>
             <select> 
            <option value="" selected="selected">Select</option>
            <option value="/">Home</option> 
            <option value="/about">About</option> 
            <option value="/menu">Menu</option> 
            <option value="/booking">Reservations</option> 
            <option value="/order-online">Order Online</option> 
            <option value="/login">Login</option> 
  </select> 

      </nav>
);
}

export default Nav;