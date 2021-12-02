import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { Menu } from './components/Menu';
import { Scene } from './components/Scene';
import { Keyboard } from './components/Keyboard';
import * as THREE from 'three';
import textures from './textures';

const App = () => {
  const crimson = new THREE.Color(0xdc143c);
  const teal = new THREE.Color(0x008080);
  const steelblue = new THREE.Color(0x4682b4);

  const loadImages = async files => {
    files.forEach(async file => {
      const img = new Image();
      img.src = file;
      await img.decode();
    });
  };

  const smooth = [
    textures.smoothTexture1,
    textures.smoothTexture2,
    textures.smoothTexture3,
    textures.smoothTexture4
  ];
  
  const rough = [
    textures.roughTexture1,
    textures.roughTexture2,
    textures.roughTexture3,
    textures.roughTexture4
  ];

  const beatup = [
    textures.beatupTexture1,
    textures.beatupTexture2,
    textures.beatupTexture3,
    textures.beatupTexture4
  ];

  loadImages([...rough, ...beatup]);

  /** State */
  const [currentTexture, setCurrentTexture] = useState(smooth);
  const [currentColor, setCurrentColor] = useState(steelblue);
  const [upKeyPressed, setUpKeyPressed] = useState(false);

  /** 
   * @param {MouseEvent} event
   * @param {string} color - The color to change for the submarine
   */
  const handleColorChange = (event, color) => {
    event.preventDefault();
    if (color === 'crimson') {
      setCurrentColor(crimson);
    } else if (color === 'teal') {
      setCurrentColor(teal);
    } else if (color === 'steelblue') {
      setCurrentColor(steelblue);
    }
  };
  /** 
   * @param {MouseEvent} event
   * @param {string} texture - The texture to load for the submarine
   */
  const handleTextureChange = (event, texture) => {
    event.preventDefault();
    if (texture === 'smooth') {
      setCurrentTexture(smooth);
    } else if (texture === 'rough') {
      setCurrentTexture(rough);
    } else if (texture === 'beatup') {
      setCurrentTexture(beatup);
    }
  };

  return (
    <div>
      <Menu 
        handleColorChange={handleColorChange} 
        handleTextureChange={handleTextureChange} />
      <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
        <color attach="background" args={['#253B56']} />
        <Suspense fallback={null}>
          <Scene 
            currentTexture={currentTexture} 
            currentColor={currentColor} 
            upKeyPressed={upKeyPressed} />
        </Suspense>
        <OrbitControls autoRotate enableZoom={true} enablePan={true} />
      </Canvas>
      <Keyboard setUpKeyPressed={setUpKeyPressed} />
    </div>
  )
}

export default App;