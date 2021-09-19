import Canvas from "@/components/canvas"
import Scene from "@/components/scene"
import { randomStrelkaColor } from "@/helpers"
import { Leva } from "leva"
import { useState } from "react"

const Home = () => {
  const [color] = useState(randomStrelkaColor())
  return (
    <>
      <Leva collapsed />
      <Canvas color={color}>
        <Scene color={color} />
      </Canvas>
    </>
  )
}

export default Home
