import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { button, useControls } from "leva"
import { useMemo, useRef } from "react"
import { MathUtils, Vector3 } from "three"

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
    // var height = 2 * Math.tan(vFOV / 2) * dist // visible height
    const dist = height / (2 * Math.tan(vFOV / 2))
    return dist

    //   const wh = height
    //   const a = wh / (2 * Math.cos(fov * (Math.PI / 180)))
    //   console.log(a, wh)
    //   const square = a ** 2 - wh ** 2 / 4
    //   console.log(a, Math.sqrt(square), wh)
    //   return Math.sqrt(square)
  }, [height])

  const resetCamera = () => {
    if (cam.current) {
      // controls.current.reset()
      controls.current.target.set(0, 0, 0)
      cam.current.position.set(0, dist, 0)
      cam.current.rotation.set(-Math.PI / 2, 0, 0)
    }
  }

  return (
    <>
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
