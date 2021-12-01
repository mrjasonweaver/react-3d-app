import React, { useLayoutEffect }from 'react';
import { useGLTF } from '@react-three/drei';
import submarine from '../models/submarine-without-propeller.gltf';

export const Submarine = ({currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap}) => {
  const { scene, nodes, materials } = useGLTF(submarine);

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