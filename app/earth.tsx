import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "./loader";

const Earth = () => {
  const earth = useGLTF('assets/planet/scene.gltf');

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Earth Canvas
const EarthCanvas = () => {
  // Explicitly define the type of cameraPosition as a tuple of three numbers
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([1, -2, 6]);

  useEffect(() => {
    const handleResize = () => {
      // Change camera position if the screen width is less than 768px
      if (window.innerWidth < 768) {
        setCameraPosition([1, -2, 8]);  // Adjust z coordinate for smaller screens
      } else {
        setCameraPosition([1, -2, 6]);  // Default position
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      style={{ height: '500px', width: '600px', maxWidth:'90vw' }}
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 20, position: cameraPosition }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
