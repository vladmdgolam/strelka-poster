import { presets } from "@/helpers/constants"
import useTextProps from "@/hooks/useTextProps"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import TextGeneral from "../text"

const Typography = ({ color, random }) => {
  const { width: pixelWidth } = useThree(({ size }) => size)
  const { width, height } = useThree(({ viewport }) => viewport)

  const [textPreset, setTextPreset] = useState(2)

  const [userText, setUserText] = useState()

  const nextPreset = () =>
    setTextPreset(
      (prevId) =>
        (prevId + 1) % (userText ? presets.length - 1 : presets.length)
    )

  useUpdateEffect(() => nextPreset(), [random])

  const {
    textProps: { center, repeat, text, clip, visible, fontSize, ...textProps },
  } = useTextProps(textPreset)

  const requestTextFromUser = () => {
    const res = prompt("Type your text", "тут был Вёрджил")
    res && setUserText(res)
  }
  // const { _finFontSize = 1, letterSpacing } = useControls("hi", {
  //   _finFontSize: {
  //     // value: (fontSize * pixelWidth) / (pixelWidth < 700 ? 740 : 1440),
  //     value: 3.5,
  //     min: 3.2,
  //     max: 3.7,
  //     step: 0.001,
  //   },
  //   letterSpacing: {
  //     value: 0.14,
  //     min: 0.1,
  //     max: 0.2,
  //     step: 0.001,
  //   },
  // })

  const finFontSize = (fontSize * pixelWidth) / (pixelWidth < 700 ? 740 : 1440)

  const finRepeat = repeat ? Math.round((repeat * 1440) / pixelWidth) : 1

  let n = Math.floor(height / finFontSize)
  let _lh = height / (n * finFontSize)

  return (
    <>
      <ControlsBtn position={10} onClick={requestTextFromUser}>
        💬
      </ControlsBtn>
      <TextGeneral
        text={userText ? userText : text}
        repeat={finRepeat}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={finFontSize}
        position={center ? [0, 0.02, 0] : [-width / 2, 0.02, -height / 2]}
        maxWidth={width}
        clip={clip}
        visible={visible}
        // lineHeight={Math.floor(height) / height}
        // lineHeight={(lh * k * finLH) / height}
        lineHeight={_lh}
        // lineHeight={1}
        overflowWrap="break-word"
        {...textProps}
        color={color}
      />
    </>
  )
}

export default Typography
