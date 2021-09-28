import { useRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

const TextGeneral = ({
  look,
  color,
  text = "STRELKA",
  children,
  fontSize = 0.4,
  ...rest
}) => {
  const ref = useRef(null)
  const { camera } = useThree()

  useFrame(() => {
    look && ref.current && ref.current.lookAt(camera.position)
  })

  return (
    <Text
      font="/lazurski-cyrillic.woff"
      color={color ? color : "black"}
      anchorX="center"
      anchorY="middle"
      ref={ref}
      fontSize={fontSize}
      textAlign="center"
      {...rest}
    >
      {text}
      <meshBasicMaterial depthTest={false} />
      {children}
    </Text>
  )
}

export default TextGeneral
