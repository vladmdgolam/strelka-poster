import { forwardRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import ControlsBtn from "../controls/ControlsBtn"

// eslint-disable-next-line react/display-name
const TextGeneral = forwardRef(
  ({ clip, visible, text = "STRELKA", children, ...rest }, ref) => {
    const { width, height } = useThree(({ viewport }) => viewport)
    const [depthTest, setDT] = useState(true)
    return (
      <>
        <ControlsBtn position={11} onClick={() => setDT((prev) => !prev)}>
          🙈
        </ControlsBtn>
        <Text
          font="/lazurski-cyrillic.woff"
          ref={ref}
          clipRect={clip ? [0, -height, width, 0] : null}
          visible={visible}
          {...rest}
        >
          {text}
          <meshBasicMaterial
            onUpdate={(self) => (self.needsUpdate = true)}
            depthTest={depthTest}
          />
          {children}
        </Text>
      </>
    )
  }
)

export default TextGeneral
