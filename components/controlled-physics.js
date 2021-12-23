import useHotkey from "@/hooks/useHotkey"
import { useKeyPress } from "@/hooks/useKeyPress"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { Physics } from "@react-three/cannon"

import { useEffect, useRef, useState } from "react"
import ControlsBtn from "./controls/ControlsBtn"

import usefulOrientation from "@/helpers/usefulOrientation"
import { useFrame } from "@react-three/fiber"

const accuracy = 1

const useOrientation = (use) => {
  const position = useRef([0, 0, 0])

  const handleOrientation = (e) => {
    const { alpha, beta, gamma } = usefulOrientation(
      e.alpha.toFixed(accuracy),
      e.beta.toFixed(accuracy),
      e.gamma.toFixed(accuracy)
    )
    position.current = [alpha, beta, gamma]
  }

  useEffect(() => {
    use &&
      window.addEventListener("deviceorientation", handleOrientation, false)
    return () =>
      use &&
      window.removeEventListener("deviceorientation", handleOrientation, false)
  }, [use])
  return position
}

const computeGravity = (position, inverted, off) =>
  [position[2], -10, position[1]].map(
    (x) => x * (inverted ? -1 : 1) * (!off ? 1 : 0)
  )

const ControlledPhysics = ({ children, deviceOrientation = false }) => {
  const position = useOrientation(deviceOrientation)

  const [gravity, setGravity] = useState([0, -10, 0])

  useFrame(() => {
    // deviceOrientation && console.log(position.current)
    if (deviceOrientation) {
      console.log("hi")
      let _gravity = computeGravity(position.current, inverted, off)
      if (_gravity[0] != gravity[0] || _gravity[2] != gravity[2]) {
        console.log("update gravity")
        setGravity(_gravity)
      }
    }
  })

  const [inverted, setInverted] = useState(false)
  const [off, setOff] = useState(false)

  useUpdateEffect(() => {
    const _gravity = computeGravity(position.current, inverted, off)
    setGravity(_gravity)
  }, [inverted, off])

  useKeyPress("u", (down) => setInverted(down))
  useHotkey("f", () => setOff((off) => !off))

  return (
    <>
      <ControlsBtn
        onPointerDown={() => setInverted(true)}
        onPointerUp={() => setInverted(false)}
        description="gravity"
        hotkey="u"
      >
        ⬆️
      </ControlsBtn>
      {/* <ControlsBtn onClick={() => setOff(!off)} position={2}>
        👨‍🚀
      </ControlsBtn> */}

      <Physics gravity={gravity}>{children}</Physics>
    </>
  )
}

export default ControlledPhysics
