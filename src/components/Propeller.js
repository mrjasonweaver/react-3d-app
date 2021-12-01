import React, { useLayoutEffect }from 'react';
import { useGLTF } from '@react-three/drei';
import propeller from '../models/propeller.gltf';

export const Propeller = ({currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap}) => {
  const { scene, nodes, materials } = useGLTF(propeller);

  useLayoutEffect(() => {
    Object.assign(materials.Material, { 
      metalnessMap: metalnessMap,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap,
      color: currentColor})
  }, [scene, nodes, materials, currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap]);

  return <primitive object={scene} />
};