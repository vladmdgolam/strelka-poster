import { Canvas as ThreeCanvas } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { LinearToneMapping } from "three"

const Canvas = ({ children, size, color, ...rest }) => {
  const [dpr, setDpr] = useState(2)
  useEffect(() => {
    setDpr(window.devicePixelRatio)
  }, [])
  return (
    <ThreeCanvas
      onClick={() => console.log("canvas click")}
      gl={{
        stencil: false,
        alpha: false,
        antialias: true,
        preserveDrawingBuffer: true,
        // powerPreference: "high-performance",
      }}
      shadows
      onCreated={({ gl }) => {
        gl.toneMapping = LinearToneMapping
        gl.setClearColor(color ? color : "pink")
      }}
      // camera={{ near: 0.01, far: 1000}}
      dpr={dpr}
      {...rest}
    >
      {children}
    </ThreeCanvas>
  )
}

export default Canvas
