import { forwardRef } from "react"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

// eslint-disable-next-line react/display-name
const TextGeneral = forwardRef(
  ({ clip, visible, text = "STRELKA", children, ...rest }, ref) => {
    const { width, height } = useThree(({ viewport }) => viewport)
    return (
      <Text
        font="/lazurski-cyrillic.woff"
        ref={ref}
        clipRect={clip ? [0, -height, width, 0] : null}
        visible={visible}
        {...rest}
      >
        {text}
        <meshBasicMaterial />
        {children}
      </Text>
    )
  }
)

export default TextGeneral
