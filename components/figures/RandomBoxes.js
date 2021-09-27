import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import {
  randomEuler,
  randomScale,
  randomSize,
  randomStrelkaColor,
  randomVector,
} from "@/helpers"
import { useBox, useSphere } from "@react-three/cannon"
import { DoubleSide } from "three"

const generatBoxData = (number, r = 10, s = 1) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: randomSize(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
  }))

const RandomBoxes = ({ number = 100 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generatBoxData(number), [])
  return (
    <Instances>
      <boxBufferGeometry args={[1, 1]} />
      <meshBasicMaterial side={DoubleSide} />
      {data.map((props, i) => (
        <Box key={i} {...props} />
      ))}
    </Instances>
  )
}

const Box = ({ scale, color, ...rest }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    args: scale,
    ...rest,
  }))
  return (
    <group ref={ref} scale={scale}>
      <Instance color={color} />
    </group>
  )
}

export default RandomBoxes
