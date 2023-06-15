import React from "react";
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from "@react-three/drei";
import { usePlay } from "./Play";
import OverLay from "./Components/OverLay";
import Experience from "./Experience";




const App = () => {
  const { end } = usePlay()
  return (
    <>
      <Canvas>
        <color attach="background" args={['#ececec']} />
        <ScrollControls pages={!end ? 10 : 0} damping={0.5}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <OverLay />
    </>
  );
}

export default App;
