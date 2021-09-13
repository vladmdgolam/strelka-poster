import { usePlane } from "@react-three/cannon"
import { DoubleSide } from "three"

const Plane = ({ color = "lightblue", args = [200, 200], ...rest }) => {
  const [ref] = usePlane(() => ({ ...rest }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={args} />
      <meshBasicMaterial side={DoubleSide} color={color} />
    </mesh>
  )
}

export default Plane
