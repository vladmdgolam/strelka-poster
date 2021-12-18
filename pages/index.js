import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import ControlsMenu from "@/components/menu"
import Scene from "@/components/scene"
import { randomExtendedColor } from "@/helpers"
import AppContext from "@/hooks/AppContext"
import useRandom from "@/hooks/useRandom"
import { useContextBridge } from "@react-three/drei"
import { Leva } from "leva"
import { useState } from "react"

const Home = () => {
  const [initialColor] = useState(randomExtendedColor())
  console.log(initialColor, "init color")

  const [random, setRandom] = useState(0)
  const randomize = () => setRandom(Math.random())

  const ContextBridge = useContextBridge(AppContext)

  return (
    <>
      <Leva hidden />
      <Canvas color={initialColor}>
        <ContextBridge>
          <ControlsMenu />
          <ControlsBtn onClick={randomize} position={8}>
            🔀
          </ControlsBtn>
          <Scene initialColor={initialColor} random={random} />
        </ContextBridge>
      </Canvas>
    </>
  )
}

export default Home
