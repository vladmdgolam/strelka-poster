import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { Physics } from "@react-three/cannon"
import { useControls } from "leva"
import { useEffect, useState } from "react"
import HtmlWrapper from "./html/html"
import IntroScreen from "./html/intro-screen"

const ControlledPhysics = ({ children }) => {
  const [inverted, setInverted] = useState(false)
  useControls({
    inv: {value: inverted, onChange:(inv) => setInverted(inv)},
  })
  //   const { position, gravConstant } = useControls({
  //     x: { value: 0, min: -100, max: 100 },
  //     y: { value: -10, min: -100, max: 100 },
  //     z: { value: 0, min: -100, max: 100 },
  //     gravConstant: { value: 1, min: 0, max: 10, step: 0.1 },
  //     gravity: { value: [0, -10, 0], step: 1, max: 180, min: -180 },
  //     position: { value: [0, 0, 0], step: 1, max: 180, min: -180 },
  //   })
  const [gravity, setGravity] = useState([0, -10, 0])
  const [init, setInit] = useState(false)

  const {
    position: devicePosition,
    requestDeviceOrientation,
    working,
  } = useDeviceOrientation()

  useEffect(() => {
    // var acc = {
    //   x: Math.cos(pitch) * Math.sin(roll) * gravConstant,
    //   y: Math.sin(pitch) * gravConstant,
    // }

    // setGravity([acc.x, -10, acc.y])
    let futureGravity = [devicePosition[2], -10, devicePosition[1]].map(
      (x) => x * (inverted ? -1 : 1)
    )

    setGravity(futureGravity)
  }, [devicePosition, inverted])

  const start = () => {
    if (window.DeviceOrientationEvent && "ontouchstart" in window) {
      requestDeviceOrientation()
    } else {
      setInit(true)
    }
  }

  return (
    <>
      <HtmlWrapper className="controls">
        <div
          className="btn-round"
          onPointerDown={() => setInverted(true)}
          onPointerUp={() => setInverted(false)}
        >
          inv
        </div>
      </HtmlWrapper>
      {!(init || working) && <IntroScreen start={start} />}
      <Physics gravity={gravity}>{children}</Physics>
    </>
  )
}

export default ControlledPhysics
