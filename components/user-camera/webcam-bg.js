import { Plane } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import FiguresMaterial from "../figures/VideoMaterial"

const WebcamBg = ({ video, videoAspect = 1 }) => {
  const { width, height } = useThree(({ viewport }) => viewport)
  const desiredAspect = width / height
  const aspect = videoAspect / desiredAspect

  const props = {
    "offset-x": aspect > 1 ? (1 - 1 / aspect) / 2 : 0,
    "repeat-x": aspect > 1 ? 1 / aspect : 1,
    "offset-y": aspect > 1 ? 0 : (1 - aspect) / 2,
    "repeat-y": aspect > 1 ? 1 : aspect,
  }

  return (
    <Plane
      args={[width * 1.025, height * 1.025]}
      rotation={[Math.PI / 2, 0, Math.PI]}
    >
      <FiguresMaterial video={video} {...props} />
    </Plane>
  )
}

export default WebcamBg
