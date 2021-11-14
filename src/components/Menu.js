import React from 'react';

export const Menu = ({handleColorChange, handleTextureChange}) => {
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
      <ul>
        <li>
          <a href="/smooth" onClick={event => handleTextureChange(event, 'smooth')}>smooth</a>
        </li>
        <li>
          <a href="/aged" onClick={event => handleTextureChange(event, 'rough')}>rough</a>
        </li>
        <li>
          <a href="/beatup" onClick={event => handleTextureChange(event, 'beatup')}>beatup</a>
        </li>
      </ul>
    </nav>
  )
}