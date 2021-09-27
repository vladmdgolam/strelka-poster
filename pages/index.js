import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import Scene from "@/components/scene"
import { randomStrelkaColor } from "@/helpers"
import AppContext from "@/hooks/AppContext"
import { useContextBridge } from "@react-three/drei"
import { Leva } from "leva"
import { useState } from "react"

const Home = () => {
  const [color] = useState(randomStrelkaColor())
  const [random, setRandom] = useState(0)
  const randomize = () => {
    setRandom(random + 1)
  }

  const ContextBridge = useContextBridge(AppContext)

  return (
    <>
      <Leva hidden />

      <Canvas color={color}>
        <ContextBridge>
          <ControlsBtn onClick={randomize} position={8}>
            🔀
          </ControlsBtn>
          <Scene random={random} color={color} />
        </ContextBridge>
      </Canvas>
    </>
  )
}

export default Home
