import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { Suspense } from "react"

import Borders from "./physics/borders"
import Camera from "./camera"
import ControlledPhysics from "./physics/controlled-physics"

import RandomFigures from "./figures/RandomFigures"
import Typography from "./typography"
import ScreenshotHelper from "./screenshot-helper"

// import WebcamBgWrapper from "./webcam-bg-wrapper"

const Scene = ({ random, color, position, textColor, deviceOrientation }) => {
  const gl = useThree(({ gl }) => gl)

  useUpdateEffect(() => {
    gl.setClearColor(color)
  }, [color])

  // const [cameraCapable, setCameraCapable] = useState(false)
  // useLayoutEffect(
  //   () => setCameraCapable(navigator.mediaDevices.getUserMedia ? true : false),
  //   []
  // )

  return (
    <>
      <ScreenshotHelper />
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
