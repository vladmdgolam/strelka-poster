import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"

import Borders from "./physics/borders"
import Camera from "./camera"
import ControlledPhysics from "./physics/controlled-physics"

import RandomFigures from "./figures/RandomFigures"
import Typography from "./typography"
import ScreenshotHelper from "./screenshot-helper"

import WebcamBgWrapper from "./user-camera/webcam-bg-wrapper"

const Scene = (props) => {
  const { random, color, position, textColor, deviceOrientation, overlay } =
    props
  const gl = useThree(({ gl }) => gl)

  useUpdateEffect(() => {
    gl.setClearColor(color)
  }, [color])

  const [cameraCapable, setCameraCapable] = useState(false)
  useEffect(
    () => setCameraCapable(navigator.mediaDevices.getUserMedia && true),
    []
  )

  return (
    <>
      <ScreenshotHelper overlay={overlay} />
      <Camera />
      <ControlledPhysics
        deviceOrientation={deviceOrientation}
        position={position}
      >
        <Borders random={random} />
        <Suspense fallback={null}>
          <Typography random={random} color={textColor} />
          <RandomFigures random={random} />
        </Suspense>
      </ControlledPhysics>
      {cameraCapable && <WebcamBgWrapper />}
    </>
  )
}

export default Scene
