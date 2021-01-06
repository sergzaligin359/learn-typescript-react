import React from 'react'

export const NavBar: React.FC = () => {
    return (
        <nav>
        <div className='nav-wrapper purple darken-2'>
          <a href='/' className='brand-logo'>React + TypeScript</a>
          <ul className='right hide-on-med-and-down'>
            <li><a href='/'>Список дел</a></li>
            <li><a href='/'>О нас</a></li>
          </ul>
        </div>
      </nav>
    )
}
