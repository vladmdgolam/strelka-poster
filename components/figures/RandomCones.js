import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import { generateFigureData } from "@/helpers"
import { useCylinder } from "@react-three/cannon"
import { DoubleSide } from "three"

const r = 0.98475 // константа чтобы привести все фигуры к одному изначальному объёму

const RandomCones = ({ number = 100, sizeScale }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(
    () => generateFigureData({ figure: "cone", number, sizeScale }),
    [number, sizeScale]
  )
  return (
    <Instances limit={10}>
      <meshBasicMaterial side={DoubleSide} />
      <Cones data={data} />
    </Instances>
  )
}

const Cones = ({ data }) => {
  return (
    <>
      <cylinderGeometry args={[0, r, r * 2, 30]} />
      <meshBasicMaterial side={DoubleSide} />
      {data.map(({ id, ...props }) => (
        <Cone key={id} {...props} />
      ))}
    </>
  )
}

const Cone = ({ scale, color, ...rest }) => {
  const [ref] = useCylinder(() => ({
    mass: 1,
    args: [0.01, scale[0] * r, scale[1] * r * 2, 20],
    ...rest,
  }))

  return (
    <Instance ref={ref} scale={[scale[0], scale[1], scale[0]]} color={color} />
  )
}

export default RandomCones
