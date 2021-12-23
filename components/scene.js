import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { Suspense } from "react"

import useTakeScreenshot from "@/hooks/useTakeScreenshot"
import Borders from "./borders"
import Camera from "./camera"
import ControlledPhysics from "./controlled-physics"
import ControlsBtn from "./controls/ControlsBtn"
import RandomFigures from "./figures/RandomFigures"
import Typography from "./typography"

// import WebcamBgWrapper from "./webcam-bg-wrapper"

const Scene = ({ random, color, position, textColor, deviceOrientation }) => {
  const takeScreenshot = useTakeScreenshot()

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
      <ControlsBtn
        position={4}
        description="save"
        hotkey="s"
        group="right"
        onClick={takeScreenshot}
      >
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
