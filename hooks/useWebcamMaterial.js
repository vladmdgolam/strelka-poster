import { useState, useEffect, useMemo } from "react"
import { useWebcam } from "@/hooks/useWebcam"

export default function useWebCamMaterial({ desiredAspect = 1 }) {
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
    console.log("camera", cameras)
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
        console.log("set devices", devices)
        if (devices && devices.length > 0) {
          const cameraVideoInputs = devices.filter(
            (device) => device.kind === "videoinput"
          )
          const _deviceOptions = { ...deviceOptions }
          cameraVideoInputs.forEach((device) => {
            _deviceOptions[device.label] = device.deviceId
          })
          setDeviceOptions(_deviceOptions)
          console.log("set device options", _deviceOptions)
        }
      })
    }
  }, [])

  // useEffect(() => {
  //   if (devices && devices.length > 0) {
  //     const cameraVideoInputs = devices.filter(
  //       (device) => device.kind === "videoinput"
  //     )
  //     const _deviceOptions = { ...deviceOptions }
  //     cameraVideoInputs.forEach((device) => {
  //       _deviceOptions[device.label] = device.deviceId
  //     })
  //     setDeviceOptions(_deviceOptions)
  //     console.log("set device options", _deviceOptions)
  //   }
  // }, [devices])

  return webcamMaterial
}
