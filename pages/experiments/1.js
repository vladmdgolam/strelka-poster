import Canvas from "@/components/canvas"
import { Instance, Instances, OrbitControls } from "@react-three/drei"

const Page = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Instances
        limit={1000} // Optional: max amount of items (for calculating buffer size)
        range={1000} // Optional: draw-range
      >
        <boxGeometry />
        <meshStandardMaterial />
        <Instance
          color="red"
          scale={2}
          position={[1, 2, 3]}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <Instance
          color="blue"
          scale={1}
          position={[1, 0, 3]}
          rotation={[Math.PI / 3, 0, 0]}
        />
      </Instances>
    </Canvas>
  )
}

export default Page
