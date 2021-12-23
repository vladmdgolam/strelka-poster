import Canvas from "@/components/canvas"
import ControlsBtn from "@/components/controls/ControlsBtn"
import Overlay from "@/components/html/overlay"
import Scene from "@/components/scene"
import AppContext from "@/hooks/AppContext"
import useInit from "@/hooks/useInit"
import useRandom from "@/hooks/useRandom"
import useColors from "@/hooks/useTheme"
import { useContextBridge } from "@react-three/drei"

const Home = () => {
  const ContextBridge = useContextBridge(AppContext)

  const { random, randomize } = useRandom()
  const { colorTheme, color, initialColor } = useColors(random)

  const { init, deviceOrientation, start, showInfo } = useInit()

  return (
    <>
      <Overlay {...{ init, start, colorTheme }} />
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
      <Canvas color={initialColor}>
        <ContextBridge>
          <Scene
            textColor={colorTheme}
            deviceOrientation={deviceOrientation}
            color={color}
            random={random}
          />
        </ContextBridge>
      </Canvas>
    </>
  )
}

export default Home
