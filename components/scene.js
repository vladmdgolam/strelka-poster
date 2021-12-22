import { randomExtendedColor } from "@/helpers"
import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Borders from "./borders"
import Camera from "./camera"
import ControlledPhysics from "./controlled-physics"
import ControlsBtn from "./controls/ControlsBtn"
import RandomFigures from "./figures/RandomFigures"
import Typography from "./typography"

const Scene = ({ random, initialColor, position }) => {
  const [color, setColor] = useState(initialColor)

  const gl = useThree(({ gl }) => gl)
  const takeScreenshot = useTakeScreenshot()

  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setColor(nextColor)
    gl.setClearColor(nextColor)
  }, [random])

  const textColor = color === "#FFF" || color === "#FFFF06" ? "black" : "white"

  return (
    <>
      <ControlsBtn position={4} group="right" onClick={takeScreenshot}>
        📸
      </ControlsBtn>
      <Camera />
      <ControlledPhysics position={position}>
        <Borders color={color} random={random} />
        <Suspense fallback={null}>
          <Typography random={random} color={textColor} />
          {/* <RandomFigures random={random} /> */}
        </Suspense>
      </ControlledPhysics>
    </>
  )
}

export default Scene
