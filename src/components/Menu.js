import React from 'react';

export const Menu = ({handleColorChange}) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/red" onClick={event => handleColorChange(event, 'crimson')}>Red</a>
        </li>
        <li>
          <a href="/green" onClick={event => handleColorChange(event, 'teal')}>Green</a>
        </li>
        <li>
          <a href="/blue" onClick={event => handleColorChange(event, 'steelblue')}>Blue</a>
        </li>
      </ul>
    </nav>
  )
}