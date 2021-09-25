import Canvas from "@/components/canvas"
import { randomEuler, randomVector } from "@/helpers"
import { Instance, Instances, OrbitControls, Sphere } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react"

const randomData = Array.from({ length: 1000 }, (r = 10) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}))

const Els = () => {
  const { range } = useControls({ range: { value: 100, min: 0, max: 500 } })
  return (
    <>
      <Instances range={range}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial roughness={0} color="#f0f0f0" />
        {randomData.map((props, i) => (
          <Ball key={i} {...props} />
        ))}
      </Instances>
    </>
  )
}

const Ball = (props) => {
  const ref = useRef()
  return (
    <group {...props}>
      <Instance ref={ref} />
    </group>
  )
}

const Page = () => {
  return (
    <Canvas color="pink">
      <OrbitControls />
      <Els />
    </Canvas>
  )
}

export default Page
