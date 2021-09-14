import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { Debug, Physics } from "@react-three/cannon"
import { Html } from "@react-three/drei"
// import { useControls } from "leva"
import { useEffect, useState } from "react"

const ControlledPhysics = ({ children }) => {
  //   const { position, gravConstant } = useControls({
  //     x: { value: 0, min: -100, max: 100 },
  //     y: { value: -10, min: -100, max: 100 },
  //     z: { value: 0, min: -100, max: 100 },
  //     gravConstant: { value: 1, min: 0, max: 10, step: 0.1 },
  //     gravity: { value: [0, -10, 0], step: 1, max: 180, min: -180 },
  //     position: { value: [0, 0, 0], step: 1, max: 180, min: -180 },
  //   })
  const [gravity, setGravity] = useState([0, -10, 0])

  const devicePosition = useDeviceOrientation()

  useEffect(() => {
    // var pitch = (Math.PI * position[1]) / 180
    // var roll = (Math.PI * position[2]) / 180
    // var pitch = (Math.PI * position[1]) / 180
    // var roll = (Math.PI * position[2]) / 180

    // var acc = {
    //   x: Math.cos(pitch) * Math.sin(roll) * gravConstant,
    //   y: Math.sin(pitch) * gravConstant,
    // }

    // setGravity([acc.x, -10, acc.y])
    setGravity([devicePosition[2], -10, devicePosition[1]])
  }, [devicePosition])
  return (
    <>
      <Html
        className="html"
        fullscreen
        calculatePosition={(_, __, { width, height }) => [
          width / 2,
          height / 2,
        ]}
      >
        <p>alpha {devicePosition[0]}</p>
        <p>beta {devicePosition[1]}</p>
        <p>gamma {devicePosition[2]}</p>
        {/* <p>{gravity}</p> */}
      </Html>
      <Physics gravity={gravity}>
        <Debug>{children}</Debug>
      </Physics>
    </>
  )
}

export default ControlledPhysics
