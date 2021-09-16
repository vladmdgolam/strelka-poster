import { Cylinder as DreiCylinder } from "@react-three/drei"
import { useCylinder } from "@react-three/cannon"

const Cylinder = ({
  position = [0, 0, 0],
  radius = 1,
  height = 1,
  color = "white",
}) => {
  const args = [radius, radius, height, 40]

  const [ref] = useCylinder(() => ({
    mass: Math.max(radius * height, 1),
    args,
    position,
  }))

  return (
    <DreiCylinder ref={ref} args={args} position={position}>
      <meshBasicMaterial color={color} />
    </DreiCylinder>
  )
}

export default Cylinder
