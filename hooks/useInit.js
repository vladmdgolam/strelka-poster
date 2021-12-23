import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { useState } from "react"
import useUpdateEffect from "./useUpdateEffect"

export default function useInit() {
  const [init, setInit] = useState(false)
  const initialize = () => setInit(true)

  const { requestDeviceOrientation, deviceOrientation } =
    useDeviceOrientation(initialize)

  useUpdateEffect(
    () => deviceOrientation && initialize(),
    [deviceOrientation]
  )

  const start = () => {
    if (
      !deviceOrientation &&
      window.DeviceOrientationEvent &&
      "ontouchstart" in window
    ) {
      requestDeviceOrientation()
    } else {
      initialize()
    }
  }
  const showInfo = () => {
    setInit(false)
  }

  return { deviceOrientation, init, start, showInfo }
}
