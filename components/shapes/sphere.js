import { randomStrelkaColor } from "@/helpers"
import { useSphere } from "@react-three/cannon"
import { useState } from "react"
import { DoubleSide } from "three"

const Sphere = ({ radius = 0.5, position = [0, 10, 0], ...rest }) => {
  const args = [radius, 40, 40]
  const [ref, api] = useSphere(() => ({
    args: args[0],
    mass: 1,
    position,
    ...rest,
  }))
  const [color] = useState(() => randomStrelkaColor())
  return (
    <mesh ref={ref} castShadow>
      <sphereBufferGeometry args={args} />
      <meshBasicMaterial color={color} side={DoubleSide} />
      {/* <meshLambertMaterial color={color} side={DoubleSide} /> */}
    </mesh>
  )
}

export default Sphere
