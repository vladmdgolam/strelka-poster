import React, { useMemo, useState, useEffect } from "react"
import { DoubleSide, sRGBEncoding } from "three"

export function useWebcam({ id, desiredAspect = 1 }) {
  const [videoAspect, setVideoAspect] = useState(1)
  const [vid] = useState(document.createElement("video"))
  const [videoTexture, setVideoTexture] = useState(null)

  useEffect(() => {
    document.body.appendChild(vid)
  }, [vid])

  /**
   * Device ID can be found using;
   *
   *  navigator.mediaDevices.enumerateDevices()
   *  .then((devices)=>{
   *    console.log(devices)
   *  })
   *
   *
   */

  const aspect = videoAspect / desiredAspect

  const props = {
    "offset-x": aspect > 1 ? (1 - 1 / aspect) / 2 : 0,
    "repeat-x": aspect > 1 ? 1 / aspect : 1,
    "offset-y": aspect > 1 ? 0 : (1 - aspect) / 2,
    "repeat-y": aspect > 1 ? 1 : aspect,
  }

  useMemo(() => {
    if (navigator.mediaDevices.getUserMedia) {
      const constraints = { video: { deviceId: id } }

      if (id === "default") return false
      console.log(id)

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          const video = stream.getVideoTracks()

          setVideoAspect(
            video[0].getSettings().width / video[0].getSettings().height
          )
          vid.style.position = "absolute"
          vid.width = 100
          vid.height = 100
          vid.srcObject = stream
          var playPromise = vid.play()

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Automatic playback started!
                // Show playing UI.
                console.log("video init")
                vid &&
                  setVideoTexture(
                    <meshBasicMaterial side={DoubleSide}>
                      <videoTexture
                        {...props}
                        onUpdate={(self) => (self.needsUpdate = true)}
                        encoding={sRGBEncoding}
                        attach="map"
                        args={[vid]}
                      />
                    </meshBasicMaterial>
                  )
              })
              .catch((error) => {
                console.log("video error", error)
                // Auto-play was prevented
                // Show paused UI.
              })
          }
        })
        .catch(function (error) {
          console.warn(error)
        })
    }
  }, [vid, id])

  return videoTexture
}
