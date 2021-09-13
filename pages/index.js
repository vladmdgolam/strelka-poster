import Canvas from "@/components/canvas"
import Scene from "@/components/scene"
import { OrbitControls } from "@react-three/drei"

export default function Home() {
  return (
    <Canvas>
      <OrbitControls />
      <Scene />
    </Canvas>
  )
}
