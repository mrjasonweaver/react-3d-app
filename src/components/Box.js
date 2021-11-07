import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const Box = ({currentColor}) => {
  // This reference will give us direct access to the mesh
  const ref = useRef()
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh
      ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={currentColor} />
    </mesh>
  )
}