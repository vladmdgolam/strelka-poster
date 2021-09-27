import Canvas from "@/components/canvas"
import Plane from "@/components/plane"
import { Physics } from "@react-three/cannon"
import { OrbitControls } from "@react-three/drei"

const Page = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Physics>
        <Plane position={[0, -10, 0]} />
      </Physics>
    </Canvas>
  )
}

export default Page
