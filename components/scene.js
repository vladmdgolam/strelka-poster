import Sphere from "@/components/shapes/sphere"
import { usePlane } from "@react-three/cannon"
import { Box, PerspectiveCamera } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import ControlledPhysics from "./controlled-physics"
import Plane from "./plane"

function Borders() {
  const { width, height } = useThree(({ viewport }) => viewport)

  // useEffect(() => {
  //   console.log(viewport)
  // }, [viewport])
  // const planeDimensions = { width: 10, height: 10 }
  const blockHeight = 5
  return (
    <>
      <Plane
        args={[width, height]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI, 0]}
      />
      <Plane
        position={[-width / 2, blockHeight / 2, 0]}
        args={[blockHeight, height]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <Plane
        position={[width / 2, blockHeight / 2, 0]}
        args={[blockHeight, height]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      />
      <Plane
        position={[0, blockHeight / 2, -height / 2]}
        args={[width, blockHeight]}
        rotation={[0, 0, 0]}
      />
      <Plane
        position={[0, blockHeight / 2, height / 2]}
        args={[width, blockHeight]}
        rotation={[0, Math.PI, 0]}
      />
    </>
  )
}

const Scene = () => {
  return (
    <>
      <ambientLight />
      <axesHelper />
      <PerspectiveCamera makeDefault position={[0, 13, 0]} />
      {/* camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}> */}
      <ControlledPhysics>
        <Borders />
        <Sphere />
        {/* <Plane position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      </ControlledPhysics>
    </>
  )
}

export default Scene
