import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import {
  random2D,
  randomEuler,
  randomStrelkaColor,
  randomVector,
} from "@/helpers"
import { useCylinder } from "@react-three/cannon"
import { DoubleSide } from "three"

const generateCylinderData = (number, r = 10, s = 0.5) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: random2D(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
  }))

const RandomCylinders = ({ number = 100 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generateCylinderData(number), [])
  return (
    <Instances limit={number}>
      <cylinderGeometry args={[1, 1, 1, 20]} />
      <meshBasicMaterial side={DoubleSide} />
      {data.map((props, i) => (
        <Cylinder key={i} {...props} />
      ))}
    </Instances>
  )
}

const Cylinder = ({ scale, color, ...rest }) => {
  const [ref] = useCylinder(() => ({
    mass: 1,
    args: [scale[0], scale[0], scale[1], 20],
    ...rest,
  }))
  return (
    <group ref={ref} scale={[scale[0], scale[1], scale[0]]}>
      <Instance color={color} />
    </group>
  )
}

export default RandomCylinders
