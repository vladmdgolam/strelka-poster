import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"
import Scene from "@/components/scene"
import { randomExtendedColor } from "@/helpers"
import AppContext from "@/hooks/AppContext"
import useInit from "@/hooks/useInit"
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

  const { init, working, start, position } = useInit()

  return (
    <>
      <Leva hidden />
      {!(init || working) && <IntroScreen start={start} />}
      <ControlsMenu />
      <Canvas color={initialColor}>
        <ContextBridge>
          <ControlsBtn onClick={randomize} position={8}>
            🔀
          </ControlsBtn>
          <Scene
            position={position}
            initialColor={initialColor}
            random={random}
          />
        </ContextBridge>
      </Canvas>
    </>
  )
}

export default Home
