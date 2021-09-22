import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import { PerspectiveCamera } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useControls, button } from "leva"
import { Suspense, useMemo } from "react"
import Borders from "./borders"
import Camera from "./camera"
import ControlledPhysics from "./controlled-physics"
import ControlsBtn from "./controls/controlsBtn"
import Lights from "./lights"
import InstancedSpheres from "./shapes/instanced-spheres"
import InstancedText from "./text/instanced-text"
// import Vehicle from "./vehicle"

const Scene = ({ color: initialColor }) => {
  const takeScreenshot = useTakeScreenshot()
  const gl = useThree(({ gl }) => gl)
  useControls({
    screenshot: button(() => takeScreenshot()),
    color: {
      value: initialColor,
      onChange: (futureColor) => {
        gl.setClearColor(futureColor)
      },
    },
  })

  return (
    <>
      <ControlsBtn position={4} onClick={takeScreenshot}>📸</ControlsBtn>
      <Camera />
      <Lights />
      <ControlledPhysics>
        <Suspense fallback={null}>{/* <Vehicle /> */}</Suspense>
        <Borders />
        {/* <Vehicle /> */}
        <InstancedSpheres />
        {/* <InstancedText /> */}
        {/* <BoxText /> */}
        {/* <TextGeneral rotation={[-Math.PI / 2, 0, 0]} /> */}
      </ControlledPhysics>
    </>
  )
}

export default Scene
