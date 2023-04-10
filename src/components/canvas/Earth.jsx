import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('../room/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1} />
      <pointLight intensity={1} />

      <primitive
        scale={5}
        object={earth.scene}
        position-y={0}
        rotation-y={10}
      />
    </mesh>
  );
};
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ fov: 25, near: 1, far: 200, position: [15, 5, 20] }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
