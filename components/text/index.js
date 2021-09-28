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
  (
    {
      look,
      text = "STRELKA",
      children,
      depthTest = true,
      textProps = {
        color: "black",
        fontSize: 0.4,
        textAlign: "center",
        anchorX: "center",
        anchorY: "middle",
      },
      ...rest
    },
    ref
  ) => {
    const { camera } = useThree()
    console.log(<Text />)
    return (
      <Text font="/lazurski-cyrillic.woff" ref={ref} {...textProps} {...rest}>
        {text}
        <meshBasicMaterial depthTest={depthTest} />
        {children}
      </Text>
    )
  }
)

export default TextGeneral
