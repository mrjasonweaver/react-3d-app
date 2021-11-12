import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stage, OrbitControls } from '@react-three/drei'
import { Menu } from './components/Menu';
import { Submarine } from './components/Submarine';
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
          <Stage environment={null} intensity={1} contactShadowOpacity={0.1} shadowBias={-0.0015}>
          <Environment
              background={true} // Whether to affect scene.background
              files={'UW_1.hdr'}
              path={'/'}
            />
            <Submarine currentColor={currentColor} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default App;