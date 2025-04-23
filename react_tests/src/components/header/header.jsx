import React from 'react'
import './header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="photo_2025-04-03_11-11-23.svg" alt="logo"/>
            </div>

            <nav className="nav">
                <a href="home">Bosh</a>
                <a href="menu">Menu</a>
                <a href="order">Buyurtma berish</a>
            </nav>
        </header>
    );
};


export default Header;