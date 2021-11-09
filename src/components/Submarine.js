import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Submarine = () => {
  const gltf = useLoader(GLTFLoader, './models/submarine.gltf')
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};