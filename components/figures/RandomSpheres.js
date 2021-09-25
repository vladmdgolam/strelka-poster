import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import {
  randomEuler,
  randomScale,
  randomStrelkaColor,
  randomVector,
} from "@/helpers"
import { useSphere } from "@react-three/cannon"

const generateRandomData = (number, r = 10, s = 1) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: randomScale(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
  }))

const RandomSpheres = ({ number = 100 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generateRandomData(number), [])
  return (
    <Instances limit={number}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshBasicMaterial />
      {data.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}
    </Instances>
  )
}

const Sphere = ({ scale, color, ...rest }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    args: parseFloat(scale[0]),
    ...rest,
  }))
  return (
    <group ref={ref} scale={scale}>
      <Instance color={color} />
    </group>
  )
}

export default RandomSpheres
