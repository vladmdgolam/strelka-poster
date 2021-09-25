import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import {
  randomEuler,
  randomScale,
  randomSize,
  randomStrelkaColor,
  randomVector,
} from "@/helpers"
import { useCone } from "@react-three/cannon"
import { DoubleSide } from "three"

const generatConeData = (number, r = 10, s = 5) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: random2D(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
  }))

function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry)
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices()
  return [
    geo.vertices.map((v) => [v.x, v.y, v.z]),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    [],
  ]
}

const RandomBoxes = ({ number = 100 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generatConeData(number), [])

  const geometry = useMemo(() => new ConeGeometry(1, 1, 20, 1), [])
  const args = useMemo(() => toConvexProps(geometry), [geometry])

  return (
    <Instances limit={number}>
      {geometry}
      <meshBasicMaterial side={DoubleSide} />
      {data.map((props, i) => (
        <Cone args={args} key={i} {...props} />
      ))}
    </Instances>
  )
}

const Cone = ({ scale, color, ...rest }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    args: args,
    ...rest,
  }))
  return (
    <group ref={ref} scale={scale}>
      <Instance color={color} />
    </group>
  )
}

export default RandomBoxes
