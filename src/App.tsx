import { Canvas, MeshProps, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import moonImage from "./moon.jpg";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 5;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const App = () => {
  // @ts-ignore
  // eslint-disable-next-line
  const Box = (props: any) => {
    const textureMap = useLoader(TextureLoader, moonImage);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<MeshProps>(null);
    // Hold state for hovered and clicked events
    const [clicked, click] = useState(false);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    useFrame(() => (ref.current.rotation.y += 0.002));

    return (
      <mesh {...props} ref={ref} scale={1} onClick={() => click(!clicked)}>
        {/* <sphereGeometry args={[1, 10, 1]} /> */}
        <sphereGeometry args={[1, 20, 16]} />
        <meshBasicMaterial attach="material" map={textureMap} />
      </mesh>
    );
  };
  return (
    <Canvas>
      <Suspense fallback={null}>
        <CameraController />
        <ambientLight intensity={0.1} />
        {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
        <pointLight position={[5, 10, 10]} />
        {/* <Box position={[-1.2, -0, 0]} /> */}
        <Box position={[0, 0, 0]} />
        {/* <primitive object={new AxesHelper(10)} /> */}
        {/* <mesh>
        <boxGeometry attach="geometry" args={[3, 2, 1]} />
        <meshPhongMaterial attach="material" color="hotpink" />
      </mesh> */}
      </Suspense>
    </Canvas>
  );
};

export default App;
