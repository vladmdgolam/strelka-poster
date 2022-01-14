import { presets } from "@/helpers/constants"
import useTextProps from "@/hooks/useTextProps"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import TextGeneral from "../text"

const textModes = ["visible", "transparent", "hidden"]
const modesEmojis = { visible: "🐵", transparent: "🙊", hidden: "🙈" }

const calculateSizeProps = (fontSize, pixelWidth, pixelHeight, height) => {
  // Working in pixel units
  const screenHeightMultiplier = 800 / pixelHeight

  const screenWidthDivider = pixelWidth < 700 ? 720 : 1440

  const finFontSize =
    (screenHeightMultiplier * fontSize * pixelWidth) / screenWidthDivider

  // Working in three units
  let n = Math.floor(height / finFontSize)
  let lineHeight = height / (n * finFontSize)
  return { finFontSize, lineHeight }
}

const Typography = ({ color, random }) => {
  const { width: pixelWidth, height: pixelHeight } = useThree(
    ({ size }) => size
  )
  const { width, height } = useThree(({ viewport }) => viewport)

  const [textPreset, setTextPreset] = useState(2)

  const [userText, setUserText] = useState()

  useUpdateEffect(() => {
    userText && presets[textPreset].visible === false && nextPreset()
  }, [userText])

  const nextPreset = () =>
    setTextPreset(
      (prevId) =>
        (prevId + 1) % (userText ? presets.length - 1 : presets.length)
    )

  useUpdateEffect(() => nextPreset(), [random])

  const {
    textProps: { center, text, fontSize, ...textProps },
  } = useTextProps(textPreset)

  const requestTextFromUser = () => {
    const res = prompt("Type your text", "Strelka Open Code")
    res && setUserText(res)
  }

  const { finFontSize, lineHeight } = calculateSizeProps(
    fontSize,
    pixelWidth,
    pixelHeight,
    height
  )

  const [textMode, setTextMode] = useState("visible")
  const toggleTextView = () =>
    setTextMode((prev) => {
      const nextId = (textModes.indexOf(prev) + 1) % textModes.length
      return textModes[nextId]
    })

  return (
    <>
      <ControlsBtn
        description="fill"
        hotkey="m"
        position={12}
        onClick={toggleTextView}
      >
        {modesEmojis[textMode]}
      </ControlsBtn>
      <ControlsBtn
        position={10}
        description="text"
        hotkey="t"
        onClick={requestTextFromUser}
      >
        💬
      </ControlsBtn>
      <TextGeneral
        text={userText ? userText : text}
        textMode={textMode}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={finFontSize}
        position={center ? [0, 0.02, 0] : [-width / 2, 0.02, -height / 2]}
        maxWidth={width}
        lineHeight={lineHeight}
        overflowWrap="break-word"
        {...textProps}
        color={color}
      />
    </>
  )
}

export default Typography
