import { forwardRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const texts = [
  // "ALL SUMMER\n(MM, MM)",
  // ".45 GUNNERS\n(MMH, MMH)",
  // "IN PAJAMAS\n(MMH, MMH)",
  // "JUNYA WATANABE\nON MY WRI'",
  // "DONDA",
  "STRELKA",
]

const getRandomText = () => {
  return texts[Math.floor(Math.random() * texts.length)]
}

// eslint-disable-next-line react/display-name
const TextGeneral = forwardRef(
  ({ look, color, text, children, ...rest }, ref) => {
    const { camera } = useThree()

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
)

export default TextGeneral
