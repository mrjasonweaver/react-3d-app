import React from 'react';
import { NavItem } from './NavItem';
import { smooth, rough, beatup } from '../textures';

export const Menu = ({handleColorChange, handleTextureChange}) => {
  return (
    <nav>
      <ul>
        <li>
          <a 
            href="/red"
            onClick={event => handleColorChange(event, 'crimson')}>
              <NavItem textures={smooth} color={'crimson'} />
          </a>
        </li>
        <li>
          <a 
            href="/green"
            onClick={event => handleColorChange(event, 'teal')}>
              <NavItem textures={smooth} color={'teal'} />
          </a>
        </li>
        <li>
          <a 
            href="/blue"
            onClick={event => handleColorChange(event, 'steelblue')}>
              <NavItem textures={smooth} color={'steelblue'} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a 
            href="/smooth"
            onClick={event => handleTextureChange(event, 'smooth')}>
              <NavItem textures={smooth} color={'steelblue'} />
          </a>
        </li>
        <li>
          <a 
            href="/rough"
            onClick={event => handleTextureChange(event, 'rough')}>
              <NavItem textures={rough} color={'steelblue'} />
          </a>
        </li>
        <li>
          <a 
            href="/beatup"
            onClick={event => handleTextureChange(event, 'beatup')}>
              <NavItem textures={beatup} color={'steelblue'} />
          </a>
        </li>
      </ul>
    </nav>
  )
}