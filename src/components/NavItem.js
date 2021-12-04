import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture } from "@react-three/drei";

const Sphere = ({textures, color}) => {

  const sphereTextures = useTexture({
    map: textures[0],
    normalMap: textures[1],
    roughnessMap: textures[2],
    metalnessMap: textures[3],
  });

  return (
      <mesh>
        <sphereGeometry args={[1, 16, 32]} />
        <meshStandardMaterial {...sphereTextures} color={color} />
      </mesh>
  )
}

export const NavItem = ({textures, color}) => {

  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 24 }}>
      <ambientLight intensity={6} />
      <directionalLight intensity={6} position={[1, 0, 1]} />
      <Suspense fallback={null}>
          <Sphere textures={textures} color={color} />
      </Suspense>
    </Canvas>
  )
}