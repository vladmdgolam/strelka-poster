import { PerspectiveCamera } from "@react-three/drei"
import { Perf } from "r3f-perf"
import Borders from "./borders"
import ControlledPhysics from "./controlled-physics"
import Lights from "./lights"
import InstancedSpheres from "./shapes/instanced-spheres"
import InstancedText from "./text/instanced-text"
import TextGeneral from "./text/text-general"
import BoxText from "./text/text-physics"

const Scene = () => {
  // const { number } = useControls({ number: { value: 100, min: 0, max: 300 } })
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
