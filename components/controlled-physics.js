import useHotkey from "@/hooks/useHotkey"
import { useKeyPress } from "@/hooks/useKeyPress"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { Physics } from "@react-three/cannon"

import { useState } from "react"
import ControlsBtn from "./controls/ControlsBtn"

const ControlledPhysics = ({ children, position }) => {
  const [inverted, setInverted] = useState(false)
  const [off, setOff] = useState(false)

  const [gravity, setGravity] = useState([0, -10, 0])

  useUpdateEffect(() => {
    let futureGravity = [position[2], -10, position[1]].map(
      (x) => x * (inverted ? -1 : 1) * (!off ? 1 : 0)
    )

    setGravity(futureGravity)
  }, [position, inverted, off])

  useKeyPress("u", (down) => setInverted(down))
  useHotkey("f", () => setOff((off) => !off))

  return (
    <>
      <ControlsBtn
        onPointerDown={() => setInverted(true)}
        onPointerUp={() => setInverted(false)}
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
