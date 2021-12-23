import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { useCallback, useEffect, useMemo, useState } from "react"
import { render } from "react-dom"
import ControlsBtn from "./controls/ControlsBtn"
import ImagePopup from "./html/image-popup"
import detectiOS from "@/helpers/detectiOS"

// TODO: disable physics when showing image

const takeScreenshot = (gl, iOS, setImage) => {
  gl.domElement.toBlob(
    (blob) => {
      const url = URL.createObjectURL(blob)
      if (iOS) {
        setImage(url)
      } else {
        let a = document.createElement("a")
        a.href = url
        a.download = "strelka.png"
        a.click()
      }
    },
    "image/png",
    1.0
  )
}

const ScreenshotHelper = ({ overlay }) => {
  const gl = useThree(({ gl }) => gl)

  const [newImage, setImage] = useState()

  const [iOS, setiOS] = useState(false)

  useEffect(() => {
    const _iOS = detectiOS()
    setiOS(_iOS)
  }, [])

  const saveImage = useCallback(() => {
    takeScreenshot(gl, iOS, setImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iOS])

  const [el] = useState(() => {
    let _el = document.createElement("div")
    _el.classList.add("image-popup")
    return _el
  })

  useUpdateEffect(() => {
    newImage &&
      render(<ImagePopup close={() => setImage(null)} url={newImage} />, el)
    overlay.current.prepend(el)
  }, [newImage])

  return (
    <ControlsBtn
      position={4}
      description="save"
      hotkey="s"
      group="right"
      deps={iOS}
      onClick={saveImage}
      name="📸"
    />
  )
}

export default ScreenshotHelper
