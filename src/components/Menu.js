import React from 'react';

export const Menu = ({handleColorChange}) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/red" onClick={event => handleColorChange(event, 'red')}>Red</a>
        </li>
        <li>
          <a href="/green" onClick={event => handleColorChange(event, 'green')}>Green</a>
        </li>
        <li>
          <a href="/blue" onClick={event => handleColorChange(event, 'blue')}>Blue</a>
        </li>
      </ul>
    </nav>
  )
}