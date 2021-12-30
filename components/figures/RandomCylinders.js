import { Instance, Instances } from "@react-three/drei"
import { useMemo } from "react"
import { useCylinder } from "@react-three/cannon"
import { generateFigureData } from "@/helpers"
import VideoMaterial from "./VideoMaterial"

const r = 0.6827 // 1/π^(1/3);

const RandomCylinders = ({ number = 100, sizeScale, video }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(
    () => generateFigureData({ number, shape: "cylinder", sizeScale }),
    [number, sizeScale]
  )
  return (
    <Instances limit={10}>
      <cylinderGeometry args={[r, r, r, 32]} />
      <VideoMaterial video={video} />
      {data.map(({ id, ...props }) => (
        <Cylinder key={id} {...props} />
      ))}
    </Instances>
  )
}

const Cylinder = ({ scale, color, ...rest }) => {
  const [ref] = useCylinder(() => ({
    mass: 1,
    args: [scale[0] * r, scale[0] * r, scale[1] * r, 20],
    ...rest,
  }))
  return (
    <group ref={ref} scale={[scale[0], scale[1], scale[0]]}>
      <Instance color={color} />
    </group>
  )
}

export default RandomCylinders
