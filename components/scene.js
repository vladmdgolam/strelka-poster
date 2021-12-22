import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { Suspense, useLayoutEffect, useState } from "react"

import { randomExtendedColor } from "@/helpers"
import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import Borders from "./borders"
import Camera from "./camera"
import ControlledPhysics from "./controlled-physics"
import ControlsBtn from "./controls/ControlsBtn"
import RandomFigures from "./figures/RandomFigures"
import Typography from "./typography"

// import WebcamBgWrapper from "./webcam-bg-wrapper"

const Scene = ({ random, initialColor, position, deviceOrientation }) => {
  const [color, setColor] = useState(initialColor)

  const takeScreenshot = useTakeScreenshot()

  const gl = useThree(({ gl }) => gl)

  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setColor(nextColor)
    gl.setClearColor(nextColor)
  }, [random])

  // const [cameraCapable, setCameraCapable] = useState(false)
  // useLayoutEffect(
  //   () => setCameraCapable(navigator.mediaDevices.getUserMedia ? true : false),
  //   []
  // )

  const textColor = color === "#FFF" || color === "#FFFF06" ? "black" : "white"

  return (
    <>
      <ControlsBtn position={4} group="right" onClick={takeScreenshot}>
        📸
      </ControlsBtn>
      <Camera />
      <ControlledPhysics
        deviceOrientation={deviceOrientation}
        position={position}
      >
        <Borders color={color} random={random} />
        <Suspense fallback={null}>
          <Typography random={random} color={textColor} />
          <RandomFigures random={random} />
        </Suspense>
      </ControlledPhysics>
      {/* {cameraCapable && <WebcamBgWrapper />} */}
    </>
  )
}

export default Scene
