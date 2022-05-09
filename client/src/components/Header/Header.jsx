import React from "react";
import Nav from './Nav';
import logo from '../../assets/nasalo.png'

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='logo'></img>
      <Nav/>
      </header>
  )
}

export default Header