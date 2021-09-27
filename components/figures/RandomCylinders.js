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
import { nanoid } from "nanoid"

const r = 0.6827 // 1/π^(1/3);

const generateCylinderData = (number, r = 10, s = 0.5) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: random2D(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
    id: nanoid(),
  }))

const RandomCylinders = ({ number = 100 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generateCylinderData(number), [number])
  return (
    <Instances>
      <cylinderGeometry args={[r, r, r, 40]} />
      <meshBasicMaterial side={DoubleSide} />
      {data.map(({ id, ...props }) => (
        <Cylinder key={id} {...props} />
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
