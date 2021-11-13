import React, { useLayoutEffect }from 'react';
import { useGLTF } from '@react-three/drei';

export const Submarine = ({currentColor, colorMap, normalMap, roughnessMap, metalnessMap}) => {
  const { scene, nodes, materials } = useGLTF('./models/submarine.gltf');

  useLayoutEffect(() => {
    Object.assign(materials.Material, { 
      metalnessMap: metalnessMap,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap,
      color: currentColor})
  }, [scene, nodes, materials, currentColor, colorMap, normalMap, roughnessMap, metalnessMap]);

  return <primitive object={scene} />
};