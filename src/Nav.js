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
            gap: '18px'
        }} >
            <div>
                <img className="navLogo" src={process.env.PUBLIC_URL + "/Main logo.png"} height="40px" alt="logo" />
            </div>
            <div className="menuBar" 
            style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '18px'
        }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/booking">Reservations</Link>
                <Link to="/order-online">Order Online</Link>
                <Link to="/login">Login</Link>
        </div>
      </nav>
);
}

export default Nav;