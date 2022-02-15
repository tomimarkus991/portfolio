import { OrbitControls } from "@react-three/drei";
import { Canvas, MeshProps, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// "@react-three/drei" <OrbitControls autoRotate />;
import moonImage from "./moon.jpg";
import moonDensityImage from "./moon_density.jpg";

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.enableZoom = false;
//     controls.minDistance = 1;
//     controls.maxDistance = 15;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

const App = () => {
  const Box = (props: any) => {
    const [textureMap, densityMap] = useLoader(TextureLoader, [moonImage, moonDensityImage]);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<MeshProps>(null);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    // useFrame(() => (ref.current.rotation.y += 0.002));

    return (
      <mesh {...props} ref={ref} scale={1}>
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial attach="material" map={textureMap} normalMap={densityMap} />
      </mesh>
    );
  };
  return (
    <>
      <Canvas className="min-h-full">
        <Suspense fallback={null}>
          {/* <CameraController /> */}
          <OrbitControls autoRotate />
          <ambientLight intensity={1} />
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
      <h1>tere</h1>
    </>
  );
};

export default App;
