import { Instance, Instances } from "@react-three/drei"
import {
  randomEuler,
  randomScale,
  randomStrelkaColor,
  randomVector,
} from "@/helpers"
import { useSphere } from "@react-three/cannon"
import { nanoid } from "nanoid"
import { useMemo } from "react"

const generateRandomData = (number, r = 10, s = 0.1) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: randomScale(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
    id: nanoid(),
  }))

const RandomSpheres = ({ number = 100 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generateRandomData(number), [number])
  return (
    <Instances limit={number}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshBasicMaterial />
      {data.map(({ id, ...props }, i) => (
        <Sphere key={id} {...props} />
      ))}
    </Instances>
  )
}

const Sphere = ({ scale, color, ...rest }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    args: scale[0],
    linearDamping: 0.7,
    angularDamping: 0.7,
    ...rest,
  }))
  return (
    <group ref={ref} scale={scale}>
      <Instance color={color} />
    </group>
  )
}

export default RandomSpheres
