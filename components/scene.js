import Sphere from "@/components/shapes/sphere"
import requestDeviceOrientation from "@/helpers/requestDeviceOrientation"
import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { Physics } from "@react-three/cannon"
import { Html, PerspectiveCamera } from "@react-three/drei"
import { button, useControls } from "leva"
import { useEffect, useState } from "react"
import Plane from "./plane"

const Scene = () => {
  const { position, gravConstant } = useControls({
    x: { value: 0, min: -100, max: 100 },
    y: { value: -10, min: -100, max: 100 },
    z: { value: 0, min: -100, max: 100 },
    gravConstant: { value: 1, min: 0, max: 10, step: 0.1 },
    gravity: { value: [0, -10, 0], step: 1, max: 180, min: -180 },
    position: { value: [0, 0, 0], step: 1, max: 180, min: -180 },
  })
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
    console.log([devicePosition[2], -10, devicePosition[1]])
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
        <p>{gravity}</p>
      </Html>
      <axesHelper />
      <PerspectiveCamera makeDefault position={[0, 50, 0]} />
      <Physics gravity={gravity}>
        <Sphere />
        <Plane position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </>
  )
}

export default Scene
