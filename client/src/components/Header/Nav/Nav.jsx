import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
      <Link className='nav__element' to='/'>Home</Link>
      <br/>
      <Link className='nav__element' to='/landings'>Landings Map</Link>
      <br/>
      <Link className='nav__element' to='/neas'>Neas</Link>
      <br/>
      <Link className='nav__element' to='/list'>List Landings</Link>
      <br/>

    </div>
  )
}

export default Nav
