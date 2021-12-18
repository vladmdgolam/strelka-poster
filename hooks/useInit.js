import useDeviceOrientation from "@/hooks/useDeviceOrientation"
import { useState } from "react"

export default function useInit() {
  const { position, requestDeviceOrientation, working } = useDeviceOrientation()
  const [init, setInit] = useState(false)
  const start = () => {
    if (window.DeviceOrientationEvent && "ontouchstart" in window) {
      requestDeviceOrientation()
    } else {
      setInit(true)
    }
  }
  return { position, working, init, start }
}
