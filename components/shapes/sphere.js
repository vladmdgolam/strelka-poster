import { randomStrelkaColor } from "@/helpers"
import { useSphere } from "@react-three/cannon"
import { useState } from "react"
import { DoubleSide } from "three"

const Sphere = ({ args = [1, 20, 20], position = [0, 10, 0], ...rest }) => {
  const [ref, api] = useSphere(() => ({ args: args[0], mass: 1, position }))
  const [color] = useState(() => randomStrelkaColor())
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={args} />
      <meshLambertMaterial color={color} side={DoubleSide} />
    </mesh>
  )
}

export default Sphere
