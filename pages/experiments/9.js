import Canvas from "@/components/canvas"

import { Debug, Physics } from "@react-three/cannon"
import { Box, OrbitControls, Plane } from "@react-three/drei"
import { Perf } from "r3f-perf"
// import RandomFigures from "@/components/figures/RandomFigures"
// import Cone from "@/components/figures/Cone"
import RandomCones from "@/components/figures/RandomCones"
import useWebCamMaterial from "@/hooks/useWebcamMaterial"
import WebcamBg from "@/components/user-camera/webcam-bg"

const Page = () => {
  return (
    <Canvas color="pink">
      <group rotation={[Math.PI / 2, 0, 0]}>
        <WebcamBg />
      </group>
      <OrbitControls />
      <ambientLight />
    </Canvas>
  )
}

export default Page
