import { useSphere } from "@react-three/cannon"

const Sphere = () => {
  const [ref] = useSphere(() => ({ args: 3, mass: 1 }))
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[3, 20, 20]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default Sphere
