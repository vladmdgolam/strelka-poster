// import { button, useControls } from "leva"
import { useEffect, useState } from "react"

const useDeviceOrientation = () => {
  const [position, setPosition] = useState([0, 0, 0])
  const [working, setWorking] = useState(false)

  const handleOrientation = (e) => {
    setPosition([e.alpha.toFixed(2), e.beta.toFixed(2), e.gamma.toFixed(2)])
  }

  const addListener = () => {
    window.addEventListener("deviceorientation", handleOrientation, false)
    setWorking(true)
  }

  const requestDeviceOrientation = () => {
    if (
      window.DeviceOrientationEvent !== undefined &&
      typeof window.DeviceOrientationEvent.requestPermission === "function" &&
      !working
    ) {
      window.DeviceOrientationEvent.requestPermission().then((response) => {
        if (response === "granted") {
          addListener()
        }
      })
    }
  }

  return { position, requestDeviceOrientation, working }
}

export default useDeviceOrientation
