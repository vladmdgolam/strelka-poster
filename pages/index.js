import Canvas from "@/components/canvas"
import Scene from "@/components/scene"
import { Leva } from "leva"

const Home = () => {
  return (
    <>
      <Leva collapsed />
      <Canvas>
        <Scene />
      </Canvas>
    </>
  )
}

export default Home
