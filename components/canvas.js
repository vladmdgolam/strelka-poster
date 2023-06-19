import { Canvas as ThreeCanvas } from "@react-three/fiber"
import { useEffect, useState } from "react"

const Canvas = ({ children, color, ...rest }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <ThreeCanvas
      flat
      gl={{
        stencil: false,
        alpha: false,
        antialias: true,
        preserveDrawingBuffer: true,
      }}
      onCreated={({ gl }) => gl.setClearColor(color ? color : "white")}
      {...rest}
    >
      {children}
    </ThreeCanvas>
  )
}

export default Canvas
