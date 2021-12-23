/* eslint-disable @next/next/no-img-element */
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useRef, useState } from "react"

const ImagePopup = ({ url, close }) => {
  const [loaded, setLoaded] = useState()
  const ref = useRef()

  useUpdateEffect(() => URL.revokeObjectURL(url), [loaded])

  return (
    <>
      <div className="image-wrapper">
        <img
          ref={ref}
          onLoad={() => setLoaded(true)}
          src={url}
          alt="screenshot"
        />
      </div>
      <div className="caption">
        <p>Place your finger on the photo and hold. Then tap “Save Photo”</p>
        <button className="btn btn__close" onClick={close}>
          close
        </button>
      </div>
    </>
  )
}

export default ImagePopup
