import { Environment, Stage, useTexture } from '@react-three/drei'
import { Submarine } from '../components/Submarine';

export const Scene = ({currentColor, currentTexture}) => {
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture(currentTexture);
  return (
    <Stage intensity={1} >
      <Environment
          background={false}
          files={'UW_1.hdr'}
          path={'/'}
        />
      <mesh>
        <Submarine 
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap} 
          currentColor={currentColor}
          currentTexture={currentTexture} />
      </mesh>
    </Stage>
  )
}