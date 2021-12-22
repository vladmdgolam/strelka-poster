import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"
import Scene from "@/components/scene"
import { randomExtendedColor } from "@/helpers"
import AppContext from "@/hooks/AppContext"
import useHotkey from "@/hooks/useHotkey"
import useInit from "@/hooks/useInit"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useContextBridge } from "@react-three/drei"
import { useState } from "react"

const _initialColor = randomExtendedColor()

const Home = () => {
  const [initialColor] = useState(_initialColor)

  const [random, setRandom] = useState(0)
  const randomize = () => setRandom(Math.random())
  useHotkey("r", randomize)

  const ContextBridge = useContextBridge(AppContext)

  const { init, working, start, showInfo } = useInit()

  const [color, setColor] = useState(initialColor)
  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setColor(nextColor)
  }, [random])

  const textColor = color === "#FFF" || color === "#FFFF06" ? "black" : "white"

  return (
    <>
      <div
        className="contents"
        style={{
          color: textColor,
          "--color": textColor,
          "--btn-color":
            textColor == "white" ? "rgb(0 0 0 / 1)" : "rgb(255 255 255 / 1)",
          "--btn-hover-color":
            textColor == "white" ? "rgb(256 256 256 / 1)" : "rgb(0 0 0 / 1)",
        }}
      >
        {!(init || working) && <IntroScreen start={start} />}
      </div>
      <div
        className="contents"
        style={{
          color: textColor,
          "--color": textColor,
          "--btn-color":
            textColor == "white"
              ? "rgb(128 128 128 / 50%)"
              : "rgb(0 0 0 / 50%)",
          "--btn-hover-color":
            textColor == "white" ? "rgb(256 256 256 / 1)" : "rgb(0 0 0 / 1)",
        }}
      >
        <ControlsMenu init={init} color={textColor} />
      </div>
      <ControlsBtn
        onClick={showInfo}
        description="info"
        position={1}
        group="left"
      >
        I
      </ControlsBtn>
      <Canvas color={initialColor}>
        <ContextBridge>
          <ControlsBtn onClick={randomize} description="random" position={8}>
            🔀
          </ControlsBtn>
          <Scene
            textColor={textColor}
            deviceOrientation={working}
            color={color}
            random={random}
          />
        </ContextBridge>
      </Canvas>
    </>
  )
}

export default Home
