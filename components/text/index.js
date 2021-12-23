import { forwardRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import ControlsBtn from "../controls/ControlsBtn"
import useHotkey from "@/hooks/useHotkey"
// import { colors } from "@/helpers/constants"

const calcFinRepeat = (text, fontSize) => {
  // 1 → 40
  // 40/(fontSize) = repeat for 17 characters
  // 40*17/(fontSize) = repeat for 1 character
  // finRepeat = 680/(fontSize*length)
  let _repeat = Math.ceil(680 / (fontSize * text.length))

  return (text + " ").repeat(_repeat)
}

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

    const finText = repeat ? calcFinRepeat(text, fontSize) : text

    return (
      <>
        <ControlsBtn
          description="fill"
          hotkey="m"
          position={11}
          onClick={() => setDT((prev) => !prev)}
        >
          {depthTest ? "🐵" : "🙈"}
        </ControlsBtn>

        <Text
          onSync={() => {}}
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

// const LineHeightHelper = ({ calcLineHeight, height, maxWidth }) =>
//   Array.from({ length: Math.floor(height) }, (v, k) => k).map((el) => (
//     <Plane
//       key={el}
//       args={[maxWidth, calcLineHeight, 10]}
//       rotation={[-Math.PI / 2, 0, 0]}
//       position={[
//         0,
//         0.02,
//         calcLineHeight * el + calcLineHeight / 2 - height / 2,
//       ]}
//     >
//       <meshBasicMaterial color={colors[el % colors.length]} />
//     </Plane>
//   ))

export default TextGeneral
