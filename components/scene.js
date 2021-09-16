import { useControls } from "leva"
import Borders from "./borders"
import ControlledPhysics from "./controlled-physics"
import Lights from "./lights"
import InstancedSpheres from "./shapes/instanced-spheres"

const Scene = () => {
  // const { number } = useControls({ number: { value: 100, min: 0, max: 300 } })
  return (
    <>
      <Lights />
      <ControlledPhysics>
        <Borders />
        <InstancedSpheres />
      </ControlledPhysics>
    </>
  )
}

export default Scene
