import { useState } from "react"

const useDeviceOrientation = () => {
  const [working, setWorking] = useState(false)

  const requestDeviceOrientation = () => {
    if (
      window.DeviceOrientationEvent !== undefined &&
      typeof window.DeviceOrientationEvent.requestPermission === "function" &&
      !working
    ) {
      window.DeviceOrientationEvent.requestPermission().then((response) => {
        if (response === "granted") {
          setWorking(true)
        }
      })
    }
  }

  return { requestDeviceOrientation, working }
}

export default useDeviceOrientation
