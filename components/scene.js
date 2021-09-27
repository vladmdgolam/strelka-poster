import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import { useThree } from "@react-three/fiber"
import { useControls, button } from "leva"
import { Suspense, useState } from "react"
import Borders from "./borders"
import Camera from "./camera"
import ControlledPhysics from "./controlled-physics"
import ControlsBtn from "./controls/ControlsBtn"
import RandomFigures from "./figures/RandomFigures"
import Lights from "./lights"
import InstancedFigures from "./shapes/instancedFigures"
import InstancedText from "./text/instanced-text"

const Scene = ({ color: initialColor, random }) => {
  const takeScreenshot = useTakeScreenshot()
  const gl = useThree(({ gl }) => gl)
  useControls({
    screenshot: button(() => takeScreenshot()),
    color: {
      value: initialColor,
      onChange: (futureColor) => {
        gl.setClearColor(futureColor)
      },
    },
  })

  const [showText, setShowText] = useState(false)

  return (
    <>
      <ControlsBtn position={4} onClick={takeScreenshot}>
        📸
      </ControlsBtn>
      <ControlsBtn position={9} onClick={() => setShowText(!showText)}>
        txt
      </ControlsBtn>
      <Camera />
      <Lights />
      <ControlledPhysics>
        <Borders random={random} />
        {/* <Vehicle /> */}
        {/* <InstancedFigures random={random} /> */}
        <Suspense fallback={null}>
          {/* <Vehicle /> */}
          <RandomFigures random={random} />
        </Suspense>
        {showText && <InstancedText />}
        {/* <BoxText /> */}
        {/* <TextGeneral rotation={[-Math.PI / 2, 0, 0]} /> */}
      </ControlledPhysics>
    </>
  )
}

export default Scene
