import { OrbitControls, TransformControls } from "@react-three/drei"
import { useEffect, useRef } from "react"

const Lights = () => {
  //   const transformControls = useRef()
  const orbitControls = useRef()
  //   useEffect(() => {
  //     if (transformControls.current) {
  //       const { current: controls } = transformControls
  //       const callback = (event) => (orbitControls.current.enabled = !event.value)
  //       controls.addEventListener("dragging-changed", callback)
  //       return () => controls.removeEventListener("dragging-changed", callback)
  //     }
  //   })
  return (
    <>
      <ambientLight intensity={0.3} />
      <OrbitControls ref={orbitControls} />
      {/* <TransformControls ref={transformControls} mode="rotate"> */}
      <directionalLight intensity={1.2} castShadow position={[0, 40, 0]} />
      {/* </TransformControls> */}
    </>
  )
}

export default Lights
