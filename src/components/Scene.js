import { Environment, Stage } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { Submarine } from '../components/Submarine';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export const Scene = ({currentColor}) => {
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useLoader(TextureLoader, [
    './textures/Metal030_1K_Color.jpg',
    './textures/Metal030_1K_NormalGL.jpg',
    './textures/Metal030_1K_Roughness.jpg',
    './textures/Metal030_1K_Metalness.jpg',
  ])
  return (
    <Stage intensity={1} contactShadowOpacity={0} >
      <Environment
          background={true}
          files={'UW_1.hdr'}
          path={'/'}
        />
      <mesh>
        <Submarine 
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap} 
          currentColor={currentColor} />
      </mesh>
    </Stage>
  )
}