import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { Menu } from './components/Menu';
import { Scene } from './components/Scene';
import * as THREE from 'three';


const App = () => {
  const orange = new THREE.Color(0xffa500);
  const crimson = new THREE.Color(0xdc143c);
  const teal = new THREE.Color(0x008080);
  const steelblue = new THREE.Color(0x4682b4);

  const [currentColor, setCurrentColor] = useState(orange);

  const handleColorChange = (event, color) => {
    event.preventDefault();
    if (color === 'crimson') {
      setCurrentColor(crimson);
    } else if (color === 'teal') {
      setCurrentColor(teal);
    } else if (color === 'steelblue') {
      setCurrentColor(steelblue);
    } else {
      setCurrentColor(orange);
    }
  };

  return (
    <div>
      <Menu handleColorChange={handleColorChange} />
      <Canvas dpr={[1, 2]} camera={{ fov: 75 }}>
        <Suspense fallback={null}>
          <Scene currentColor={currentColor} />
        </Suspense>
        <OrbitControls autoRotate enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default App;