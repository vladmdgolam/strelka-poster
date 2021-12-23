import useWebCamMaterial from "@/hooks/useWebcamMaterial"
import { Plane } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const WebcamBg = () => {
  const { width, height } = useThree(({ viewport }) => viewport)
  const webcamMaterial = useWebCamMaterial({
    desiredAspect: width / height,
  })
  return webcamMaterial ? (
    <Plane args={[width, height]} rotation={[Math.PI / 2, 0, Math.PI]}>
      {webcamMaterial}
    </Plane>
  ) : null
}

export default WebcamBg
