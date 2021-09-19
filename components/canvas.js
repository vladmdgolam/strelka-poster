import { randomStrelkaColor } from "@/helpers"
import { Canvas as ThreeCanvas } from "@react-three/fiber"
import { useEffect, useState } from "react"

const Canvas = ({ children, size, color, ...rest }) => {
  const [dpr, setDpr] = useState(2)
  useEffect(() => {
    setDpr(window.devicePixelRatio)
  }, [])
  return (
    <ThreeCanvas
      gl={{
        stencil: false,
        alpha: false,
        antialias: true,
        preserveDrawingBuffer: true,
      }}
      // shadows
      linear
      onCreated={({ gl }) => {
        gl.setClearColor(color ? color : "white")
      }}
      dpr={dpr}
      {...rest}
    >
      {children}
    </ThreeCanvas>
  )
}

export default Canvas
