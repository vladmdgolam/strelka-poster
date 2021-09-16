import { randomNumber, randomStrelkaColor } from "@/helpers"
import { massMultiplier } from "@/helpers/constants"
import { useBox } from "@react-three/cannon"
import { Box as DreiBox } from "@react-three/drei"
import TextGeneral from "./text-general"

const Box = ({ max = 3, positionMax = 3, text, ...rest }) => {
  const size = [
    randomNumber(1, max),
    randomNumber(1, max),
    randomNumber(1, max),
  ]
  const position = [
    randomNumber(1, max),
    randomNumber(size[1], max),
    randomNumber(1, max),
  ]
  const [ref] = useBox(() => ({
    mass: size[0] * size[1] * size[2] * massMultiplier,
    args: size,
    position,
    ...rest,
  }))

  return (
    <DreiBox ref={ref} args={size} position={position} {...rest}>
      <meshBasicMaterial color={randomStrelkaColor()} />
      <TextGeneral text={text} position={[0, 0, size[2] / 2 + 0.01]} />
    </DreiBox>
  )
}

export default Box
