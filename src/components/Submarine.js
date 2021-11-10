import React, { useLayoutEffect }from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const Submarine = ({currentColor}) => {
  const { scene, nodes, materials } = useGLTF('./models/submarine.gltf');

  useLayoutEffect(() => {
    Object.assign(materials.Material, { 
      roughness: 0, 
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: currentColor,
      envMapIntensity: 0.5 })
  }, [scene, nodes, materials, currentColor]);

  return <primitive object={scene} />
};