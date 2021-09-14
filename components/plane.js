import { usePlane } from "@react-three/cannon"
import { useEffect } from "react"
import { DoubleSide } from "three"

const Plane = ({
  color = "lightblue",
  args = [10, 10],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...rest
}) => {
  const [ref, api] = usePlane(() => ({ position, rotation, args, ...rest }))

  useEffect(() => {
    api.position.set(...position)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  useEffect(() => {
    api.rotation.set(...rotation)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotation])

  return (
    <mesh ref={ref} {...rest}>
      <planeBufferGeometry args={args} />
      <meshNormalMaterial side={DoubleSide} />
      {/* <meshBasicMaterial side={DoubleSide} color={color} /> */}
    </mesh>
  )
}

export default Plane
