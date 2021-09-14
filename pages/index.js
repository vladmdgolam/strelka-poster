import Canvas from "@/components/canvas"
import Scene from "@/components/scene"
import { OrbitControls } from "@react-three/drei"

const Home = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Scene />
    </Canvas>
  )
}

export default Home
