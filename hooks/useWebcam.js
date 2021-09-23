import React, { useMemo, useState, useEffect } from "react"
import { DoubleSide } from "three"

export function useWebcam({ id }) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
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
   * This is useful if you have more than one camera and don't want to make a UI to select one,
   * but maybe I should write a Leva interface for this?
   *
   */

  useMemo(() => {
    if (navigator.mediaDevices.getUserMedia) {
      const constraints = { video: { deviceId: id } }

      if (id === "default") return false

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          const video = stream.getVideoTracks()
          setWidth(video[0].getSettings().width)
          setHeight(video[0].getSettings().height)
          vid.style.position = "absolute"
          vid.width = 160
          vid.height = 120
          vid.srcObject = stream
          //   vid.play()
          var playPromise = vid.play()

          if (playPromise !== undefined) {
            playPromise
              .then((_) => {
                // Automatic playback started!
                // Show playing UI.
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
                // console.log("fuck")
              })
          }

          //   console.log("set video tex")

          setVideoTexture(
            <meshBasicMaterial side={DoubleSide}>
              <videoTexture attach="map" args={[vid]} />
            </meshBasicMaterial>
          )
        })
        .catch(function (error) {
          console.warn(error)
        })
    }
  }, [vid, id])

  return [videoTexture, width, height]
}
