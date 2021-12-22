import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { useState } from "react"

export default function useInit() {
  const [init, setInit] = useState(false)
  const { position, requestDeviceOrientation, working } = useDeviceOrientation()
  const start = () => {
    if (!working && window.DeviceOrientationEvent && "ontouchstart" in window) {
      requestDeviceOrientation()
    } else {
      setInit(true)
    }
  }
  const showInfo = () => setInit(false)
  return { position, working, init, start, showInfo }
}
