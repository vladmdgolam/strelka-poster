import Canvas from "@/components/canvas"
import Plane from "@/components/plane"
import { Physics } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"
import RandomFigures from "@/components/figures/RandomFigures"

const Page = () => {
  return (
    <Canvas color="pink">
      <Perf />
      <OrbitControls />
      <ambientLight />
      <Physics>
        <RandomFigures />
        <Plane position={[0, -50, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Canvas>
  )
}

export default Page
