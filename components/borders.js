import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import Plane from "./plane"

const Borders = () => {
  const { width, height } = useThree(({ viewport }) => viewport)

  // useEffect(() => {
  //   console.log(width, height)
  // }, [width, height])

  const blockHeight = 10
  const { borders, topHeight, top, visible, topVisible } = useControls({
    topHeight: {
      value: 50,
      min: 0.1,
      max: 100,
    },
    // blockHeight: {
    //   value: 1,
    //   min: 0.1,
    //   max: 100,
    // },
    visible: true,
    topVisible: true,
    top: true,
    borders: true,
  })
  return (
    <>
      {top && (
        <Plane
          visible={borders && visible && topVisible}
          args={[width, height]}
          position={[0, topHeight, 0]}
          rotation={[-Math.PI / 2, -Math.PI, 0]}
        />
      )}
      <Plane
        visible={borders}
        args={[width, height]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI, 0]}
      />
      {borders && (
        <>
          <Plane
            visible={visible}
            position={[-width / 2, blockHeight / 2, 0]}
            args={[blockHeight, height]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <Plane
            visible={visible}
            position={[width / 2, blockHeight / 2, 0]}
            args={[blockHeight, height]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <Plane
            visible={visible}
            position={[0, blockHeight / 2, -height / 2]}
            args={[width, blockHeight]}
            rotation={[0, 0, 0]}
          />
          <Plane
            visible={visible}
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
