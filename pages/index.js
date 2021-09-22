import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/controlsBtn"
import Scene from "@/components/scene"
import { randomStrelkaColor } from "@/helpers"
import { Leva } from "leva"
import { useState } from "react"

const Home = () => {
  const [color] = useState(randomStrelkaColor())
  const [random, setRandom] = useState(0)
  const randomize = () => {
    setRandom(random + 1)
  }

  return (
    <>
      <Leva hidden />
      <Canvas color={color}>
        <ControlsBtn onClick={randomize} position={10}>
          🔀
        </ControlsBtn>
        <Scene random={random} color={color} />
      </Canvas>
    </>
  )
}

export default Home
