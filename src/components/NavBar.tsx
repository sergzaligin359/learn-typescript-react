import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar: React.FC = () => {
    return (
        <nav>
          <div className='nav-wrapper purple darken-2'>
            <NavLink to='/' className='brand-logo'>React + TypeScript</NavLink>
            <ul className='right hide-on-med-and-down'>
              <li><NavLink to='/todo'>Список дел</NavLink></li>
              <li><NavLink to='/about'>О нас</NavLink></li>
            </ul>
          </div>
        </nav>
    )
}
