import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import { PerspectiveCamera } from "@react-three/drei"
import { useControls, button } from "leva"
import Borders from "./borders"
import ControlledPhysics from "./controlled-physics"
import Lights from "./lights"
import InstancedSpheres from "./shapes/instanced-spheres"
import InstancedText from "./text/instanced-text"

const Scene = () => {
  const takeScreenshot = useTakeScreenshot()
  useControls({
    screenshot: button(() => takeScreenshot()),
  })
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 13, 0]}
        near={0.01}
        far={1000}
      />
      {/* <Perf /> */}
      <Lights />
      <ControlledPhysics>
        <Borders />
        <InstancedSpheres />
        <InstancedText />
        {/* <BoxText /> */}
        {/* <TextGeneral rotation={[-Math.PI / 2, 0, 0]} /> */}
      </ControlledPhysics>
    </>
  )
}

export default Scene
