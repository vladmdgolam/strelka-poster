import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import { MathUtils } from "three"
import ControlsBtn from "./controls/ControlsBtn"

const fov = 50

const Camera = () => {
  const { height } = useThree(({ viewport }) => viewport)
  const controls = useRef(null)
  const cam = useRef(null)
  const [cameraPosition, setCameraPosition] = useState(1)

  const dist = useMemo(() => {
    const vFOV = MathUtils.degToRad(fov)
    const dist = height / (2 * Math.tan(vFOV / 2))
    return dist
  }, [height])

  // const sideDist = useMemo(() => {
  //   const vFOV = MathUtils.degToRad(fov)
  //   const dist = height / (2 * Math.tan(vFOV / 2))
  //   return dist
  // }, [height])

  const resetCamera = () => {
    if (cam.current) {
      controls.current.target.set(0, 0, 0)
      cam.current.position.set(0, dist, 0)
      cam.current.rotation.set(-Math.PI / 2, 0, 0)
    }
  }
  const middleCamera = () => {
    if (cam.current) {
      controls.current.target.set(0, 0, 0)
      cam.current.position.set(0, dist + height / 4, 0)
      cam.current.rotation.set(-Math.PI / 2, 0, 0)
    }
  }

  const upCamera = () => {
    if (cam.current) {
      controls.current.target.set(0, 0, 0)
      cam.current.position.set(0, dist + height, 0)
      cam.current.rotation.set(-Math.PI / 2, 0, 0)
    }
  }

  const sideCamera = () => {
    if (cam.current) {
      controls.current.target.set(0, height / 2, 0)
      cam.current.position.set(0, height / 2, dist)
      cam.current.rotation.set(0, 0, 0)
    }
  }

  const changeCamera = () => {
    switch (cameraPosition) {
      case 0:
        resetCamera()
        break
      case 1:
        middleCamera()
        break
      case 2:
        upCamera()
        break
      default:
        resetCamera()
        break
    }

    setCameraPosition(cameraPosition == 2 ? 0 : cameraPosition + 1)
  }

  return (
    <>
      <axesHelper />
      <ControlsBtn position={5} onClick={changeCamera}>
        📷🔀
      </ControlsBtn>
      <ControlsBtn position={6} onClick={() => sideCamera()}>
        side
      </ControlsBtn>
      <OrbitControls
        onStart={() => setCameraPosition(0)}
        onUpdate={(self) => self.update()}
        ref={controls}
      />
      <PerspectiveCamera
        makeDefault
        position={[0, dist, 0]}
        near={0.01}
        far={1000}
        fov={fov}
        ref={cam}
        onUpdate={(self) => self.updateProjectionMatrix()}
      />
    </>
  )
}

export default Camera
