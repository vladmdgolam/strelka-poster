import Canvas from "@/components/canvas"
import Scene from "@/components/scene"
import { randomStrelkaColor } from "@/helpers"
import { Leva } from "leva"
import { useState } from "react"
import { Perf } from "r3f-perf"

const Home = () => {
  const [color] = useState(randomStrelkaColor())
  return (
    <>
      <Leva collapsed />
      <Canvas color={color}>
        <Perf position="bottom-right" />
        <Scene color={color} />
      </Canvas>
    </>
  )
}

export default Home
