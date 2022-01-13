import { forwardRef, useState } from "react"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import ControlsBtn from "../controls/ControlsBtn"

const calcFinRepeat = (text, fontSize) => {
  // empirical data
  // 1 → 40
  // 40/(fontSize) = repeat for 17 characters
  // 40*17/(fontSize) = repeat for 1 character
  // finRepeat = 680/(fontSize*length)
  let _repeat = Math.ceil(680 / (fontSize * text.length))

  return (text + " ").repeat(_repeat)
}

const textStates = ["visible", "transparent", "hidden"]

// eslint-disable-next-line react/display-name
const TextGeneral = (props) => {
  const { clip, fontSize, text, repeat, maxWidth, ...rest } = props
  const { width, height } = useThree(({ viewport }) => viewport)
  const [depthTest, setDT] = useState("visible")

  const finText = repeat ? calcFinRepeat(text, fontSize) : text

  const toggleTextView = () =>
    setDT((prev) => {
      const nextId = (textStates.indexOf(prev) + 1) % textStates.length
      return textStates[nextId]
    })

  let btnText
  switch (depthTest) {
    case "visible":
      btnText = "🐵"
      break
    case "transparent":
      btnText = "🙊"
      break
    case "hidden":
      btnText = "🙈"
      break
    default:
      break
  }

  return (
    <>
      <ControlsBtn
        description="fill"
        hotkey="m"
        position={12}
        onClick={toggleTextView}
      >
        {btnText}
      </ControlsBtn>

      {depthTest !== "hidden" && (
        <Text
          // onSync={() => {}}
          font="/lazurski-cyrillic.woff"
          maxWidth={maxWidth}
          clipRect={clip ? [0, -height, width, 0] : null}
          {...rest}
          fontSize={fontSize}
        >
          {finText}
          <meshBasicMaterial
            onUpdate={(self) => (self.needsUpdate = true)}
            depthTest={depthTest !== "transparent"}
          />
        </Text>
      )}
    </>
  )
}

export default TextGeneral
