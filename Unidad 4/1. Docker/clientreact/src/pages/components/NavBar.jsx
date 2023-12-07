import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css';

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink to="/">CRUD</NavLink></li>
      </ul>
    </nav>
  )
}
