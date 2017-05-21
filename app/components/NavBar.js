import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink to='/favorites' activeClassName='selected' className='icon'>
        <svg width="44" height="42" viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg"><path d="M3.63 18.444l17.808 21.282c.307.367.81.362 1.112 0l17.808-21.282-.71.91c1.048-1.31 1.8-2.89 2.142-4.628.137-.695.21-1.415.21-2.152C42 6.74 37.48 2.008 31.906 2.008c-4.6 0-8.48 3.22-9.696 7.623l-.42-.007C20.572 5.22 16.692 2 12.093 2 6.52 2 2 6.73 2 12.566c0 .737.072 1.456.21 2.15.342 1.738 1.093 3.32 2.142 4.63" stroke="#D0011B" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </NavLink>
      <NavLink exact to='/' activeClassName='selected' className='icon'>
        <svg width="40" height="46" viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg"><g stroke="#43484D" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="M13 44H2.876C2.392 44 2 43.716 2 43.26V18M38 19v24.26c0 .456-.392.74-.876.74H26"/><path strokeLinecap="round" d="M38 18.887L20 2 2 18.43"/><path d="M14 46V31h12v15"/></g></svg>
      </NavLink>
      <NavLink to='/login' activeClassName='selected' className='icon'>
        <svg width="45" height="46" viewBox="0 0 45 46" xmlns="http://www.w3.org/2000/svg"><g stroke="#43484D" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round"><path d="M42.25 36c0-6.627-8.954-12-20-12s-20 5.373-20 12"/><path d="M22.25 24.01c6.075 0 11-4.926 11-11 0-6.076-4.925-11-11-11s-11 4.924-11 11c0 6.074 4.925 11 11 11zM42 36v6.565c0 .586-.2 1.435-.78 1.435H3.28C2.71 44 2 43.144 2 42.565V36"/></g></svg>
      </NavLink>
    </div>
  );
}
