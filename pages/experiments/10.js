import Canvas from "@/components/canvas"
import AppContext from "@/hooks/AppContext"
import { OrbitControls, Plane } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useContext, useEffect, useState } from "react"
import { DoubleSide } from "three"
import { sRGBEncoding } from "three"
import { getGPUTier } from "detect-gpu"

const Page = () => {
  const [capable, setCapable] = useState(false)
  const { video, toggleVideo } = useContext(AppContext)

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
      setCapable(true)
  }, [])

  useEffect(() => {
    const gpuTier = getGPUTier()
    gpuTier.then((object) => {
      console.log(object)
    })
  }, [])

  return (
    <div style={{ background: "red" }}>
      {capable && (
        <>
          <button
            style={{ padding: "10px", fontSize: "40px" }}
            onClick={toggleVideo}
          >
            start
          </button>
        </>
      )}
      <Canvas color="blue">
        <OrbitControls />
        <WebcamBg video={video} />
      </Canvas>
    </div>
  )
}

const WebcamBg = ({ video }) => {
  const { width, height } = useThree(({ viewport }) => viewport)

  return (
    <Plane args={[width, height]} rotation={[0, 0, Math.PI]}>
      {video ? (
        <meshBasicMaterial
          onUpdate={(self) => (self.needsUpdate = true)}
          side={DoubleSide}
        >
          <videoTexture
            onUpdate={(self) => (self.needsUpdate = true)}
            encoding={sRGBEncoding}
            attach="map"
            args={[video]}
          />
        </meshBasicMaterial>
      ) : (
        <meshNormalMaterial />
      )}
    </Plane>
  )
}

export default Page
