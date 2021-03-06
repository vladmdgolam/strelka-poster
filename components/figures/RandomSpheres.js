import { Instance, Instances } from "@react-three/drei"
import { useSphere } from "@react-three/cannon"
import { useMemo } from "react"
import { generateFigureData } from "@/helpers"
import VideoMaterial from "./VideoMaterial"

const r = 0.488 // sqrt(3/π)/2

const RandomSpheres = ({ number = 10, sizeScale, video }) => {
  const data = useMemo(
    () => generateFigureData({ number, figure: "sphere", sizeScale }),
    [number, sizeScale]
  )

  return (
    <Instances limit={10}>
      <sphereBufferGeometry args={[r, 32, 32]} />
      <VideoMaterial video={video} />
      {data.map(({ id, ...props }) => (
        <Sphere key={id} {...props} />
      ))}
    </Instances>
  )
}

const Sphere = ({ scale = [1, 1, 1], color = "white", ...rest }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    args: [scale[0] * r],
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
