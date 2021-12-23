import Canvas from "@/components/canvas"
import Plane from "@/components/physics/plane"
import { Physics } from "@react-three/cannon"
import { Box, OrbitControls, Text } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Box3 } from "three"

const Page = () => {
  const ref = useRef(null)

  const handleClick = () => {
    // console.log(ref.current)
    objectDimensions()
  }

  const objectDimensions = () => {
    const boxObject = new Box3().setFromObject(ref.current)
    console.log(boxObject)
    // const centerVector = new THREE.Vector3()
    // boxObject.getCenter(centerVector)
    // object.position.sub(centerVector)
  }

  return (
    <Canvas color="pink">
      <OrbitControls />
      <ambientLight />
      <Text ref={ref}>hi</Text>
      <Box position={[0, 0, 3]} onClick={handleClick}>
        <meshNormalMaterial />
      </Box>

      <Physics>
        <Plane position={[0, -10, 0]} />
      </Physics>
    </Canvas>
  )
}

export default Page
