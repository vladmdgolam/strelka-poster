import { randomStrelkaColor } from "@/helpers"
import { useBox } from "@react-three/cannon"
import { Box } from "@react-three/drei"
import { useState } from "react"
import TextGeneral from "./text-general"

const BoxText = ({
  position = [0, 0, 0],
  rotation = [-Math.PI / 2, 0, 0],
  text,
  ...rest
}) => {
  const [color] = useState(randomStrelkaColor())
  const size = [3, 1, 0.1]
  const [ref] = useBox(() => ({
    mass: 1,
    args: size,
    position,
    rotation,
    // fixedRotation: true,
    // ...rest,
  }))

  return (
    <group ref={ref}>
      {/* <Box args={size} {...rest}>
        <meshBasicMaterial color={color} />
      </Box> */}
      <TextGeneral look text={text} position={[0, 0, size[2] / 2 + 0.01]} />
    </group>
  )
}

export default BoxText
