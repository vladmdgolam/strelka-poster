import { randomNumber, randomStrelkaColor } from "@/helpers"
import { massMultiplier } from "@/helpers/constants"
import { useBox } from "@react-three/cannon"
import { Box } from "@react-three/drei"
import { useState } from "react"
import TextGeneral from "./text-general"

const BoxText = ({ position = [0, 0, 0], text, ...rest }) => {
  const [color] = useState(randomStrelkaColor())
  const size = [3, 1, 0.1]
  const [ref] = useBox(() => ({
    mass: 1,
    args: size,
    position,
    ...rest,
  }))

  return (
    <group ref={ref}>
      {/* <Box args={size} {...rest}>
        <meshBasicMaterial color={color} />
      </Box> */}
      <TextGeneral text={text} position={[0, 0, size[2] / 2 + 0.01]} />
    </group>
  )
}

export default BoxText
