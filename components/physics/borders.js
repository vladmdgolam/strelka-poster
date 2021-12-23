import { useThree } from "@react-three/fiber"
import Plane from "./plane"

const Borders = () => {
  const { width, height } = useThree(({ viewport }) => viewport)

  const blockHeight = height
  const { borders, topHeight, top } = {
    topHeight: height,
    visible: false,
    topVisible: true,
    top: true,
    borders: true,
  }

  return (
    <>
      <Plane
        args={[width, height]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI, 0]}
      />
      {borders && (
        <>
          {top && (
            <Plane
              args={[width, height]}
              position={[0, topHeight, 0]}
              rotation={[-Math.PI / 2, -Math.PI, 0]}
            />
          )}
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
      )}
    </>
  )
}

export default Borders
