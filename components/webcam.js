import React, { useState, useRef, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { useAspect } from "@react-three/drei"
import { useControls } from "leva"
import { useWebcam } from "@/hooks/useWebcam"

export default function WebCam() {
  const ref = useRef()
  const { viewport, clock } = useThree()
  const [vx, vy] = useAspect(viewport.width, viewport.height)
  const [active, setActive] = useState(false)
  const [devices, setDevices] = useState()
  const [_, setStartTime] = useState(0)

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

  useEffect(() => {
    setStartTime(clock.getElapsedTime())
  }, [active, clock])

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      // scale={[vx, vy, 1]}
      onClick={() => {
        setActive(!active)
      }}
    >
      <planeBufferGeometry args={[(4 * width) / height, 4]} />
      {/* <meshNormalMaterial /> */}
      {webcamMaterial}
    </mesh>
    // <Cone args={[3, 5, 100, 100]}>{webcamMaterial}</Cone>
    // <Plane/>
  )
}
