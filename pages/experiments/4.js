import Canvas from "@/components/canvas"
import Plane from "@/components/plane"
import InstancedSpheres from "@/components/shapes/instanced-spheres"
import WebcamTexture from "@/components/WebcamTexture"
import useWebCamMaterial from "@/hooks/useWebcamMaterial"
import { Physics } from "@react-three/cannon"
import { Box, OrbitControls, Text } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useRef, useState } from "react"
import { Box3 } from "three"

const Els = () => {
  // const { vx, vy, webcamMaterial, width, height } = useWebCamMaterial()
  // console.log(width, height, "hey")

  const [devices, setDevices] = useState()
  const [deviceOptions, setDeviceOptions] = useState({
    Default: "default",
  })

  const camera = "Default"

  // const { camera } = useControls(
  //   {
  //     camera: {
  //       value: "default",
  //       options: deviceOptions,
  //     },
  //   },
  //   [deviceOptions]
  // )

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
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        setDevices(devices)
      })
    }
  }, [])
  return (
    <>
      <OrbitControls />
      <mesh>
        <planeBufferGeometry attach="geometry" />
        <meshBasicMaterial>
          <WebcamTexture id={camera} />
        </meshBasicMaterial>
      </mesh>
    </>
  )
}

const Page = () => {
  return (
    <Canvas color="pink">
      <Els />
    </Canvas>
  )
}

export default Page
