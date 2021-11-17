import { useEffect } from 'react';

const useKeys = (setUpKeyPressed) => {
  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === 'ArrowUp') {
        setUpKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === 'ArrowUp') {
        setUpKeyPressed(false);
      }
    }

    window.addEventListener('keydown', downHandler, { passive: true })
    window.addEventListener('keyup', upHandler, { passive: true })

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [setUpKeyPressed])
}


export const Keyboard = ({setUpKeyPressed}) => {
  useKeys(setUpKeyPressed);
  return null;
}