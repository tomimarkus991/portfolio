import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";

import moonImage from "./moon.jpg";
import moonDensityImage from "./moon_density.jpg";

const App = () => {
  const Box = (props: any) => {
    const [textureMap, densityMap] = useLoader(TextureLoader, [moonImage, moonDensityImage]);

    return (
      <mesh {...props} scale={1}>
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial attach="material" map={textureMap} normalMap={densityMap} />
      </mesh>
    );
  };
  return (
    <>
      <Canvas className="min-h-full">
        <Suspense fallback={null}>
          <OrbitControls autoRotate />
          <ambientLight intensity={1} />

          <pointLight position={[5, 10, 10]} />

          <Box position={[0, 0, 0]} />
          {/* <primitive object={new AxesHelper(10)} /> */}
        </Suspense>
      </Canvas>
      <h1>tere</h1>
    </>
  );
};

export default App;
