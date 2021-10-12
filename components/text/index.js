import { forwardRef } from "react"
import { Text } from "@react-three/drei"

// eslint-disable-next-line react/display-name
const TextGeneral = forwardRef(
  (
    {
      look,
      text = "STRELKA",
      children,
      depthTest = true,
      // textProps = {
      //   color: "black",
      //   fontSize: 0.4,
      //   textAlign: "center",
      //   anchorX: "center",
      //   anchorY: "middle",
      // },
      ...rest
    },
    ref
  ) => {
    return (
      <Text font="/lazurski-cyrillic.woff" ref={ref} {...rest}>
        {text}
        <meshBasicMaterial depthTest={depthTest} />
        {children}
      </Text>
    )
  }
)

export default TextGeneral
