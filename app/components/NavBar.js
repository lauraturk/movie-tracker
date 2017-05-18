import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink exact to='/' activeClassName='selected'>Movies</NavLink>
      <NavLink to='/favorites' activeClassName='selected'>Favorites</NavLink>    
    </div>
  );
}
