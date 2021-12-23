import { useState } from "react"

const useDeviceOrientation = (initialize) => {
  const [deviceOrientation, setDeviceOrientation] = useState(false)
  const enableOrientation = () => setDeviceOrientation(true)

  const requestDeviceOrientation = () => {
    if (typeof window.DeviceOrientationEvent.requestPermission === "function") {
      window.DeviceOrientationEvent.requestPermission().then((response) => {
        if (response === "granted") {
          enableOrientation()
        } else {
          initialize()
        }
      })
    } else {
      enableOrientation()
    }
  }

  return { requestDeviceOrientation, deviceOrientation }
}

export default useDeviceOrientation
