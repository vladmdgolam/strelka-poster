import { useRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

const TextGeneral = ({ look, color, text, children, ...rest }) => {
  const ref = useRef(null)
  const { camera } = useThree()

  useFrame(() => {
    look && ref.current && ref.current.lookAt(camera.position)
  })

  const [initText] = useState(text ? text : "STRELKA")
  return (
    <Text
      font="/lazurski-cyrillic.woff"
      color={color ? color : "black"}
      anchorX="center"
      anchorY="middle"
      ref={ref}
      fontSize={0.4}
      textAlign="center"
      {...rest}
    >
      {initText}
      <meshBasicMaterial  depthTest={false} />
      {children}
    </Text>
  )
}

export default TextGeneral
