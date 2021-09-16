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
      camera={{ position: [0, 13, 0], near: 0.01, far: 1000 }}
      // shadows
      linear
      onCreated={({ gl }) => {
        gl.setClearColor(color ? color : "pink")
      }}
      dpr={dpr}
      {...rest}
    >
      {children}
    </ThreeCanvas>
  )
}

export default Canvas
