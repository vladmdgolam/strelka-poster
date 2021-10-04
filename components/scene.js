import { randomExtendedColor, randomPaletteColor } from "@/helpers"
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
import Typography from "./typography"

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

  const [bordersColor, setBordersColor] = useState(
    randomPaletteColor(["#FFF", "#000"])
  )
  useEffect(() => {
    random && setBordersColor(randomExtendedColor())
  }, [random])

  useEffect(() => {
    gl.setClearColor(initialColor)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Borders color={bordersColor} random={random} />
        <Suspense fallback={null}>
          <Typography
            color={
              bordersColor === "#FFF" || bordersColor === "#FFFF54"
                ? "black"
                : "white"
            }
          />
          <RandomFigures random={random} />
          {showText && <InstancedText />}
        </Suspense>
      </ControlledPhysics>
    </>
  )
}

export default Scene
