// import { button, useControls } from "leva"
import { useState } from "react"

const useDeviceOrientation = () => {
  const [position, setPosition] = useState([0, 0, 0])
  // useControls({
  //   request: button(() => requestDeviceOrientation()),
  // })

  const handleOrientation = (e) => {
    setPosition([e.alpha.toFixed(2), e.beta.toFixed(2), e.gamma.toFixed(2)])
  }

  const requestDeviceOrientation = () => {
    if (
      window.DeviceOrientationEvent !== undefined &&
      typeof window.DeviceOrientationEvent.requestPermission === "function"
    ) {
      window.DeviceOrientationEvent.requestPermission().then((response) => {
        response === "granted" &&
          window.addEventListener("deviceorientation", handleOrientation, false)
      })
    }
  }

  return { position, requestDeviceOrientation }
}

export default useDeviceOrientation
