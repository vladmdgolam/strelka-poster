import { useRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

const texts = [
  // "ALL SUMMER\n(MM, MM)",
  // ".45 GUNNERS\n(MMH, MMH)",
  // "IN PAJAMAS\n(MMH, MMH)",
  // "JUNYA WATANABE\nON MY WRI'",
  // "DONDA",
  "STRELKA",
  "SUMMER",
  "OPEN CODE"
]

const getRandomText = () => {
  return texts[Math.floor(Math.random() * texts.length)]
}

const TextGeneral = ({ look, color, text, children, ...rest }) => {
  const ref = useRef(null)
  const { camera } = useThree()

  useFrame(() => {
    look && ref.current && ref.current.lookAt(camera.position)
  })
  const [initText] = useState(getRandomText())
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
      {text || text === "" ? text : initText}
      <meshBasicMaterial depthTest={false} />
      {children}
    </Text>
  )
}

export default TextGeneral
