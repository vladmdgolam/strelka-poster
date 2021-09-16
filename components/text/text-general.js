import { useRef } from "react"
import { Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

const TextGeneral = ({ look, color, text, children, ...rest }) => {
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
      fontSize={0.4}
      textAlign="center"
      {...rest}
    >
      {text || text === "" ? text : `STRELKA\nOPEN CODE`}
      <meshBasicMaterial />
      {children}
    </Text>
  )
}

export default TextGeneral
