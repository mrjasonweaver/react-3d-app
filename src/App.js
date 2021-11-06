import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from './components/Box';
import { Menu } from './components/Menu';

const App = () => {
  const [currentColor, setCurrentColor] = useState('orange');

  const handleColorChange = (event, color) => {
    event.preventDefault();
    setCurrentColor(color);
  }


  return (
    <div>
      <Menu handleColorChange={handleColorChange} />
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box currentColor={currentColor} position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default App;