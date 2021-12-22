import { forwardRef, useState } from "react"
import { Plane, Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import ControlsBtn from "../controls/ControlsBtn"
import useHotkey from "@/hooks/useHotkey"
import { colors } from "@/helpers/constants"

// eslint-disable-next-line react/display-name
const TextGeneral = forwardRef(
  (
    {
      clip,
      visible,
      fontSize,
      lineHeight,
      text = "STRELKA",
      repeat,
      maxWidth,
      children,
      ...rest
    },
    ref
  ) => {
    const { width, height } = useThree(({ viewport }) => viewport)
    const [depthTest, setDT] = useState(true)
    useHotkey("m", () => setDT((prev) => !prev))

    const finText = repeat ? (text + " ").repeat(repeat) : text
    const calcLineHeight = fontSize * lineHeight

    return (
      <>
        <ControlsBtn position={11} onClick={() => setDT((prev) => !prev)}>
          {depthTest ? "🐵" : "🙈"}
        </ControlsBtn>
        {Array.from({ length: Math.floor(height) }, (v, k) => k).map((el) => (
          <Plane
            key={el}
            args={[maxWidth, calcLineHeight, 10]}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[
              0,
              0.02,
              calcLineHeight * el + calcLineHeight / 2 - height / 2,
            ]}
          >
            <meshBasicMaterial color={colors[el % colors.length]} />
          </Plane>
        ))}
        <Text
          font="/lazurski-cyrillic.woff"
          ref={ref}
          maxWidth={maxWidth}
          lineHeight={lineHeight}
          clipRect={clip ? [0, -height, width, 0] : null}
          visible={visible}
          {...rest}
          fontSize={fontSize}
        >
          {finText}
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
