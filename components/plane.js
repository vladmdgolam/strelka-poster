import { randomStrelkaColor } from "@/helpers"
import { usePlane } from "@react-three/cannon"
import { GradientTexture } from "@react-three/drei"
import { useEffect, useState } from "react"
import { DoubleSide, FrontSide } from "three"

const Plane = ({
  // color = "lightblue",
  args = [10, 10],
  position = [0, 0, 0],
  rotation = [-Math.PI / 2, 0, 0],
  ...rest
}) => {
  const [ref, api] = usePlane(() => ({ position, rotation, args, ...rest }))
  const [color] = useState(randomStrelkaColor())
  const [secondColor] = useState(randomStrelkaColor())

  useEffect(() => {
    api.position.set(...position)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  useEffect(() => {
    api.rotation.set(...rotation)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotation])

  return (
    <mesh ref={ref} {...rest} receiveShadow>
      <planeBufferGeometry args={args} />
      {/* <meshLambertMaterial color={color} side={DoubleSide} /> */}
      {/* <meshNormalMaterial /> */}
      <meshBasicMaterial side={DoubleSide} color={color} />
      <meshBasicMaterial side={FrontSide}>
        {/* <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={[color, secondColor]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        /> */}
      </meshBasicMaterial>
    </mesh>
  )
}

export default Plane
