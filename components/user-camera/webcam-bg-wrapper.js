import AppContext from "@/hooks/AppContext"
import useUserCamera from "@/hooks/useUserCamera"
import { getGPUTier } from "detect-gpu"
import { useContext, useEffect, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import WebcamBg from "./webcam-bg"

const WebcamToggler = () => {
  const { toggleVideo, video, videoAspect } = useUserCamera()
  const [capable, setCapable] = useState(false)
  const { videoMode, setVideoMode } = useContext(AppContext)

  useEffect(() => {
    const gpuTier = getGPUTier()
    gpuTier.then((stats) => stats.tier === 3 && setCapable(true))
  }, [])

  const requestToggleVideo = () => {
    if (video && videoMode == "bg" && capable) {
      setVideoMode("figures")
    } else {
      toggleVideo()
    }
  }

  return (
    <>
      <ControlsBtn
        position={11}
        deps={[video, videoMode, capable]}
        onClick={requestToggleVideo}
        hotkey="w"
        description="camera"
      >
        📷
      </ControlsBtn>
      {video && videoMode == "bg" && (
        <WebcamBg video={video} videoAspect={videoAspect} />
      )}
    </>
  )
}

export default WebcamToggler
