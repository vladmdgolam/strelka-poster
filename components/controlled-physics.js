import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { Physics } from "@react-three/cannon"
import { folder, useControls } from "leva"
import { useEffect, useState } from "react"
import ControlsBtn from "./controls/ControlsBtn"
import IntroScreen from "./html/intro-screen"

const ControlledPhysics = ({ children }) => {
  const [inverted, setInverted] = useState(false)
  const [off, setOff] = useState(false)
  useControls({
    Gravity: folder({
      inv: { value: inverted, onChange: (inv) => setInverted(inv) },
      off: { value: off, onChange: (inv) => setOff(inv) },
    }),
  })
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
      (x) => x * (inverted ? -1 : 1) * (!off ? 1 : 0)
    )

    setGravity(futureGravity)
  }, [devicePosition, inverted, off])

  const start = () => {
    if (window.DeviceOrientationEvent && "ontouchstart" in window) {
      requestDeviceOrientation()
    } else {
      setInit(true)
    }
  }

  return (
    <>
      <ControlsBtn
        onPointerDown={() => setInverted(true)}
        onPointerUp={() => setInverted(false)}
      >
        ⬆️
      </ControlsBtn>
      <ControlsBtn onClick={() => setOff(!off)} position={2}>
        👨‍🚀
      </ControlsBtn>
      {!(init || working) && <IntroScreen start={start} />}

      <Physics gravity={gravity}>{children}</Physics>
    </>
  )
}

export default ControlledPhysics
