import { randomExtendedColor } from "@/helpers"
import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useState } from "react"
import Plane from "./plane"

const Borders = ({ random }) => {
  const { width, height } = useThree(({ viewport }) => viewport)

  const [color, setColor] = useState(randomExtendedColor())

  useEffect(() => {
    setColor(randomExtendedColor())
  }, [random])

  const blockHeight = height
  const { borders, topHeight, top, visible, topVisible } = useControls({
    topHeight: {
      value: height,
      min: 0.1,
      max: 100,
    },
    visible: true,
    topVisible: true,
    top: true,
    borders: true,
  })
  return (
    <>
      <Plane
        visible={borders && visible}
        args={[width, height]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI, 0]}
        color={color}
      />
      {borders && (
        <>
          {top && (
            <Plane
              visible={borders && visible && topVisible}
              args={[width, height]}
              position={[0, topHeight, 0]}
              rotation={[-Math.PI / 2, -Math.PI, 0]}
              color={color}
            />
          )}
          <Plane
            visible={visible}
            position={[-width / 2, blockHeight / 2, 0]}
            args={[blockHeight, height]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            color={color}
          />
          <Plane
            visible={visible}
            position={[width / 2, blockHeight / 2, 0]}
            args={[blockHeight, height]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            color={color}
          />
          <Plane
            visible={visible}
            position={[0, blockHeight / 2, -height / 2]}
            args={[width, blockHeight]}
            rotation={[0, 0, 0]}
            color={color}
          />
          <Plane
            visible={visible}
            position={[0, blockHeight / 2, height / 2]}
            args={[width, blockHeight]}
            rotation={[0, Math.PI, 0]}
            color={color}
          />
        </>
      )}
    </>
  )
}

export default Borders
