import Canvas from "@/components/canvas"
import Plane from "@/components/plane"
import { Debug, Physics } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"
// import RandomFigures from "@/components/figures/RandomFigures"
// import Cone from "@/components/figures/Cone"
import RandomCones from "@/components/figures/RandomCones"

const Page = () => {
  return (
    <Canvas color="pink">
      {/* <Perf /> */}
      <OrbitControls />
      <ambientLight />
      <Physics>
        <Debug>
          <RandomCones sizeScale={3} />
        </Debug>
        <Plane position={[0, -10, 0]}/>
      </Physics>
    </Canvas>
  )
}

export default Page
