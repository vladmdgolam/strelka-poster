import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import { useThree } from "@react-three/fiber"
import { useControls, button } from "leva"
import { Suspense, useEffect, useState } from "react"
import Borders from "./borders"
import Camera from "./camera"
import ControlledPhysics from "./controlled-physics"
import ControlsBtn from "./controls/ControlsBtn"
import RandomFigures from "./figures/RandomFigures"
import Lights from "./lights"
import InstancedText from "./text/InstancedText"

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

  useEffect(() => {
    gl.setClearColor(initialColor)
    console.log("hi")
  }, [initialColor])

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
        <Suspense fallback={null}>
          {/* <Vehicle /> */}
          <RandomFigures random={random} />
        </Suspense>
        {showText && <InstancedText />}
      </ControlledPhysics>
    </>
  )
}

export default Scene
