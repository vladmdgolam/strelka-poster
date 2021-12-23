import Canvas from "@/components/canvas"
import Plane from "@/components/physics/plane"
import { randomEuler, randomVector } from "@/helpers"
import { Physics } from "@react-three/cannon"
import { Instance, Instances, OrbitControls, Sphere } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react"

const randomData = Array.from({ length: 1000 }, (r = 10) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}))

const Els = () => {
  return <></>
}

const Page = () => {
  return (
    <Canvas color="pink">
      <OrbitControls />
      <Physics>
        <Els />
        <Plane position={[0, -10, 0]} />
      </Physics>
    </Canvas>
  )
}

export default Page
