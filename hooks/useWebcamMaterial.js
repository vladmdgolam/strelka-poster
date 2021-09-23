import { useState, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { useAspect } from "@react-three/drei"
import { useControls } from "leva"
import { useWebcam } from "@/hooks/useWebcam"

export default function useWebCamMaterial() {
  const { viewport } = useThree()
  const [vx, vy] = useAspect(100, 100)
  console.log(vx, vy, viewport.width, viewport.height)
  const [devices, setDevices] = useState()

  const [deviceOptions, setDeviceOptions] = useState({
    Default: "default",
  })

  const { camera } = useControls(
    {
      camera: {
        value: "default",
        options: deviceOptions,
      },
    },
    [deviceOptions]
  )

  const [webcamMaterial, width, height] = useWebcam({ id: camera })

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        setDevices(devices)
      })
    }
  }, [])

  useEffect(() => {
    if (devices && devices.length > 0) {
      const cameraVideoInputs = devices.filter(
        (device) => device.kind === "videoinput"
      )
      const _deviceOptions = { ...deviceOptions }
      cameraVideoInputs.forEach((device) => {
        _deviceOptions[device.label] = device.deviceId
      })
      setDeviceOptions(_deviceOptions)
    }
  }, [devices])

  return { webcamMaterial, width, height, vx, vy }
}
