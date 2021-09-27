import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { button, useControls } from "leva"
import { useMemo, useRef } from "react"
import { MathUtils } from "three"
import ControlsBtn from "./controls/ControlsBtn"

const fov = 50

const Camera = () => {
  const { width, height } = useThree(({ viewport }) => viewport)
  const controls = useRef(null)
  const cam = useRef(null)
  useControls({
    resetCamera: button(() => resetCamera()),
  })

  const dist = useMemo(() => {
    const vFOV = MathUtils.degToRad(fov)
    const dist = height / (2 * Math.tan(vFOV / 2))
    return dist
  }, [height])

  const topDist = useMemo(() => {
    const vFOV = MathUtils.degToRad(fov)
    const dist = height / (2 * Math.tan(vFOV / 2))
    return dist
  }, [height])

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

  return (
    <>
      <ControlsBtn position={7} onClick={upCamera}>
        📷2
      </ControlsBtn>
      <ControlsBtn position={6} onClick={middleCamera}>
        📷2
      </ControlsBtn>
      <ControlsBtn position={5} onClick={resetCamera}>
        📷1
      </ControlsBtn>
      <OrbitControls onUpdate={(self) => self.update()} ref={controls} />
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
