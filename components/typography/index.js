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

  const nextPreset = () =>
    setTextPreset((prevId) => (prevId + 1) % presets.length)

  useUpdateEffect(() => nextPreset(), [random])

  const {
    textProps: { center, repeat, text, clip, visible, fontSize, ...textProps },
  } = useTextProps(textPreset)

  const finText = repeat
    ? text.repeat(Math.round((repeat * 1440) / pixelWidth))
    : text

  const finFontSize = (fontSize * pixelWidth) / (pixelWidth < 700 ? 740 : 1440)
  return (
    <>
      <ControlsBtn position={10} onClick={nextPreset}>
        💬
      </ControlsBtn>
      <TextGeneral
        text={finText}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={finFontSize}
        position={center ? [0, 0.02, 0] : [-width / 2, 0.02, -height / 2]}
        maxWidth={width}
        clip={clip}
        visible={visible}
        overflowWrap="break-word"
        {...textProps}
        color={color}
      />
    </>
  )
}

export default Typography
