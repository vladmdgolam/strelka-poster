import { useContext, useRef, useState } from "react"
import AppContext from "./AppContext"

const useUserCamera = () => {
  const { video, setVideo } = useContext(AppContext)
  const [videoAspect, setAspect] = useState(1)

  const facingMode = useRef("user")
  const isMobile = useRef(null)

  // const checkAvaliableCameras = () => {
  //   const _devices = navigator.mediaDevices.enumerateDevices()
  //   _devices.then((_returnedDevices) => {
  //     const avaliableCameras = _returnedDevices.filter(
  //       (device) => device.kind == "videoinput"
  //     )
  //     isMobile.current = avaliableCameras.length > 1
  //   })
  // }

  const requestVideo = () => {
    const _video = video ? video : document.createElement("video")
    _video.setAttribute("playsinline", "")

    const constraints = {
      audio: false,
      video: { facingMode: facingMode.current },
    }

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      // checkAvaliableCameras()
      _video.srcObject = stream
      _video.play()
      const video = stream.getVideoTracks()
      setAspect(video[0].getSettings().width / video[0].getSettings().height)
      setVideo(_video)
    })
  }

  const flipCamera = () => {
    facingMode.current = facingMode.current == "user" ? "environment" : "user"
  }

  const toggleVideo = () => {
    if (video) {
      if (facingMode.current == "user" && isMobile.current) {
        flipCamera()
        requestVideo()
      } else {
        video.srcObject.getTracks().forEach((track) => track.stop())
        setVideo(null)
        isMobile && flipCamera()
      }
    } else {
      requestVideo()
    }
  }

  return { toggleVideo, video, videoAspect }
}

export default useUserCamera
