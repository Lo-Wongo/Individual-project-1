import React from 'react';
import logo from '../user.jpg';


function Header() {

    return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">User Tracker</h1>
    </header>
    )
}



export default Header;