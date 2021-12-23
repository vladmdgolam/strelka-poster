import { Canvas as ThreeCanvas } from "@react-three/fiber"
import { useEffect, useLayoutEffect, useState } from "react"

const Canvas = ({ children, color, ...rest }) => {
  const [dpr, setDpr] = useState(1)
  useLayoutEffect(() => setDpr(window.devicePixelRatio), [])

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
      dpr={dpr}
      {...rest}
    >
      {children}
    </ThreeCanvas>
  )
}

export default Canvas
