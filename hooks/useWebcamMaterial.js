import { useState, useEffect, useMemo } from "react"
import { useWebcam } from "@/hooks/useWebcam"

export default function useWebCamMaterial({ desiredAspect = 1 }) {
  const [devices, setDevices] = useState()

  const [deviceOptions, setDeviceOptions] = useState({
    default: "default",
  })

  // const { camera } = useControls(
  //   {
  //     camera: {
  //       value: "default",
  //       options: deviceOptions,
  //     },
  //   },
  //   [deviceOptions]
  // )

  const camera = useMemo(() => {
    const cameras = Object.keys(deviceOptions).filter((el) => el != "default")
    return cameras ? cameras[0] : "default"
  }, [deviceOptions])

  // const camera = 'default'
  // console.log({ camera, deviceOptions })

  const webcamMaterial = useWebcam({
    id: camera,
    desiredAspect,
  })

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

  return webcamMaterial
}
