import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"
import Scene from "@/components/scene"
import { randomExtendedColor } from "@/helpers"
import { colorsExtended, lightColors } from "@/helpers/constants"
import AppContext from "@/hooks/AppContext"
import useHotkey from "@/hooks/useHotkey"
import useInit from "@/hooks/useInit"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useContextBridge } from "@react-three/drei"
import cn from "classnames"
import { useState } from "react"

const Home = () => {
  const [initialColor] = useState(randomExtendedColor())

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

  const colorTheme = lightColors.includes(color) ? "black" : "white"

  return (
    <>
      <Overlay {...{ init, start, working, showInfo, colorTheme }} />
      <Canvas color={initialColor}>
        <ContextBridge>
          <ControlsBtn
            hotkey="r"
            onClick={randomize}
            description="random"
            position={8}
          >
            💥
          </ControlsBtn>
          <Scene
            textColor={colorTheme}
            deviceOrientation={working}
            color={color}
            random={random}
          />
        </ContextBridge>
      </Canvas>
    </>
  )
}

const Overlay = ({ init, start, working, showInfo, colorTheme }) => {
  useHotkey("i", showInfo)
  return (
    <>
      <div
        className={cn("contents", {
          white: colorTheme === "white",
        })}
      >
        {!(init || working) && <IntroScreen start={start} />}
        <ControlsMenu init={init} />
      </div>
      <ControlsBtn
        onClick={showInfo}
        description="info"
        hotkey="i"
        position={1}
        group="left"
      >
        ℹ️
      </ControlsBtn>
    </>
  )
}

export default Home
