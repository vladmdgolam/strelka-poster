import { DoubleSide, sRGBEncoding } from "three"

const VideoMaterial = ({ video, ...props }) => {
  return (
    <meshBasicMaterial
      onUpdate={(self) => (self.needsUpdate = true)}
      side={DoubleSide}
    >
      {video && (
        <videoTexture
          encoding={sRGBEncoding}
          attach="map"
          args={[video]}
          {...props}
        />
      )}
    </meshBasicMaterial>
  )
}

export default VideoMaterial
