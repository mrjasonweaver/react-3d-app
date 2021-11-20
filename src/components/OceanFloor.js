import React from 'react';
import { useTexture } from '@react-three/drei';

export const OceanFloor = ({sand}) => {
  const sandTexture = useTexture({
    map: sand[0],
    aoMap: sand[1],
    normalMap: sand[2],
    roughnessMap: sand[3],
    displacementMap: sand[4],
  })

  return <mesh>
    <planeGeometry attach="geometry" args={[1, 1]} />
    <meshStandardMaterial depthWrite={false} {...sandTexture} attach="material" />
  </mesh>
};