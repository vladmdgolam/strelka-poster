import { useState } from "react"
import ControlsBtn from "./controls/ControlsBtn"
import WebcamBg from "./webcam-bg"

const WebcamBgWrapper = () => {
  const [init, setInit] = useState(false)

  return (
    <>
      <ControlsBtn position={7} onClick={() => setInit((init) => !init)}>
        📷
      </ControlsBtn>
      {init && <WebcamBg />}
    </>
  )
}

export default WebcamBgWrapper
