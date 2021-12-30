import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import Overlay from "@/components/html/overlay"
import Scene from "@/components/scene"
import { randomExtendedColor } from "@/helpers"
import { colorsExtended } from "@/helpers/constants"
import getThemeFromColor from "@/helpers/getThemeFromColor"
import AppContext from "@/hooks/AppContext"
import useInit from "@/hooks/useInit"
import useRandom from "@/hooks/useRandom"
import useTheme from "@/hooks/useTheme"
import { useContextBridge } from "@react-three/drei"
import { useRef } from "react"

const Home = ({ initialColor = "white", initialTheme }) => {
  const ContextBridge = useContextBridge(AppContext)

  const { random, randomize } = useRandom()
  const { colorTheme, color, theme } = useTheme(
    random,
    initialColor,
    initialTheme
  )

  const { init, deviceOrientation, start, showInfo } = useInit()

  const overlay = useRef()

  return (
    <>
      <Overlay ref={overlay} {...{ init, start, theme }} />
      <ControlsBtn
        onClick={showInfo}
        description="info"
        hotkey="i"
        position={1}
        group="left"
        name="ℹ️"
      />
      <ControlsBtn
        hotkey="r"
        onClick={randomize}
        description="random"
        position={8}
        name="💥"
      />
      <Canvas color={colorsExtended[initialColor]}>
        <ContextBridge>
          <Scene
            overlay={overlay}
            textColor={colorTheme}
            deviceOrientation={deviceOrientation}
            color={colorsExtended[color]}
            random={random}
          />
        </ContextBridge>
      </Canvas>
    </>
  )
}

export async function getServerSideProps() {
  const initialColor = randomExtendedColor()
  const initialTheme = getThemeFromColor(initialColor)
  return {
    props: { initialColor, initialTheme }, // will be passed to the page component as props
  }
}

export default Home
