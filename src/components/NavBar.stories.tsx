import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { NavBar } from './NavBar';


export default {
  title: 'NavBar',
  component: NavBar
} as Meta;

export const NavBar2: React.FC = () => {
    return (
        <nav>
          <div className='nav-wrapper purple darken-2'>
            navbar
          </div>
        </nav>
    )
}
