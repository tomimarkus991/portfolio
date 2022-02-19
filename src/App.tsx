import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { TextureLoader } from "three";

import { DatGuiPanel, GuiData } from "./DatGui.panel";
// import moonImage from "./moon.jpg";
// import moonDensityImage from "./moon_density.jpg";
import normalMapImage from "./NormalMap.png";

const App = () => {
  const [data, setData] = useState<GuiData>({
    metalness: 0.7,
    color: "#ff0000",
  });
  console.log("data", data);

  const Box = (props: any) => {
    const [normalMap] = useLoader(TextureLoader, [normalMapImage]);

    return (
      <mesh {...props} scale={1}>
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          color={0x292929}
          attach="material"
          normalMap={normalMap}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    );
  };

  return (
    <>
      <DatGuiPanel data={data} setData={setData} />
      <Canvas className="min-h-full" camera={{ position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <OrbitControls autoRotate />

          <Box position={[0, 0, 0]} />
          {/* <primitive object={new AxesHelper(10)} /> */}
        </Suspense>
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[-10, -15, -10]} color={0xff0000} />
        <spotLight intensity={0.5} angle={Math.PI / 8} position={[25, 25, 15]} castShadow />
      </Canvas>
      <h1>tere</h1>
    </>
  );
};

export default App;
