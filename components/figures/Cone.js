import toConvexProps from "@/helpers/toConvexProps"
import { useConvexPolyhedron } from "@react-three/cannon"
import { useMemo } from "react"
import { ConeGeometry } from "three"

const Cone = ({ position, rotation, sides = 64 }) => {
  const geometry = new ConeGeometry(0.7, 0.7, sides, 1)
  const args = useMemo(() => toConvexProps(geometry), [])
  const [ref] = useConvexPolyhedron(() => ({
    args,
    mass: 100,
    position,
    rotation,
  }))

  return (
    <mesh castShadow {...{ geometry, position, ref, rotation }}>
      <coneBufferGeometry args={[0.7, 0.7, sides, 1]} />
      <meshNormalMaterial />
    </mesh>
  )
}
export default Cone
