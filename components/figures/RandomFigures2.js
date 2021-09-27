import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import { generateFigureData } from "@/helpers"
import { useBox } from "@react-three/cannon"
import { DoubleSide } from "three"

const RandomFigures = ({ figure = "sphere", number = 10, sizeScale }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(
    () => generateFigureData({ figure, number, sizeScale }),
    [number, sizeScale, figure]
  )
  return (
    <Instances>
      <meshBasicMaterial side={DoubleSide} />
      <Boxes data={data} />
    </Instances>
  )
}

const Boxes = ({ data }) => (
  <>
    <boxBufferGeometry />
    {data.map(({ id, ...props }) => (
      <Box key={id} {...props} />
    ))}
  </>
)

const Box = ({ scale, color, ...rest }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    args: scale,
    ...rest,
  }))
  return <Instance ref={ref} scale={scale} color={color} />
}

export default RandomBoxes
