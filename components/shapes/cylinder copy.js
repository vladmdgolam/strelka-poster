import { Cylinder } from "@react-three/drei"
import { useCylinder } from "@react-three/cannon"
import { randomNumber, randomStrelkaColor } from "@/helpers"
import { massMultiplier } from "@/helpers/constants"

const Cyl = ({ max, maxPos }) => {
  const radius = randomNumber(0, max)
  const args = [radius, radius, randomNumber(1, max), 40]
  const position = [
    randomNumber(1, maxPos),
    randomNumber(args[2], maxPos),
    randomNumber(1, maxPos),
  ]

  const [ref] = useCylinder(() => ({
    mass: Math.max(radius * args[2], 1) * massMultiplier,
    args,
    position,
  }))
  return (
    <Cylinder ref={ref} args={args} position={position}>
      <meshBasicMaterial color={randomStrelkaColor()} />
    </Cylinder>
  )
}

export default Cyl
