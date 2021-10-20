import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import { generateFigureData } from "@/helpers"
import { useConvexPolyhedron } from "@react-three/cannon"
import { ConeGeometry, DoubleSide } from "three"
import toConvexProps from "@/helpers/toConvexProps"

const r = 0.98475 // константа чтобы привести все фигуры к одному изначальному объёму

const RandomCones = ({ number = 100, sizeScale }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(
    () => generateFigureData({ figure: "cone", number, sizeScale }),
    [number, sizeScale]
  )
  return (
    <Instances>
      <meshBasicMaterial side={DoubleSide} />
      <Cones data={data} />
    </Instances>
  )
}

const Cones = ({ data }) => {
  return (
    <>
      <coneBufferGeometry args={[r, r, 30, 1]} />
      {data.map(({ id, ...props }) => (
        <Cone key={id} {...props} />
      ))}
    </>
  )
}

const Cone = ({ scale, color, ...rest }) => {
  const geometry = useMemo(
    () => new ConeGeometry(r * scale[0], r * scale[1], 5, 1),
    [scale]
  )
  const args = useMemo(() => toConvexProps(geometry), [geometry])
  const [ref] = useConvexPolyhedron(() => ({
    args,
    mass: 1,
    ...rest,
  }))

  return (
    <Instance ref={ref} scale={[scale[0], scale[1], scale[0]]} color={color} />
  )
}

export default RandomCones
