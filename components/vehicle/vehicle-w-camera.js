import { PerspectiveCamera } from "@react-three/drei"
import Vehicle from "."

const VehicleWCamera = () => {
  return (
    <>
      <Vehicle />
      <PerspectiveCamera
        makeDefault
        position={[0, 13, 0]}
        near={0.01}
        far={1000}
        ref={cam}
      />
    </>
  )
}

export default VehicleWCamera
