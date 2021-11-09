import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Menu } from './components/Menu';
import { Submarine } from './components/Submarine';

const App = () => {
  const [currentColor, setCurrentColor] = useState('orange');

  const handleColorChange = (event, color) => {
    event.preventDefault();
    setCurrentColor(color);
  };

  return (
    <div>
      <Menu handleColorChange={handleColorChange} />
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Submarine />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;