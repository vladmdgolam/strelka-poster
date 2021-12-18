import { presets } from "@/helpers/constants"
import useTextProps from "@/hooks/useTextProps"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useThree } from "@react-three/fiber"
import { useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import TextGeneral from "../text"

const Typography = ({ color, random }) => {
  const { width, height } = useThree(({ viewport }) => viewport)
  const [textPreset, setTextPreset] = useState(2)

  const nextPreset = () =>
    setTextPreset((prevId) => (prevId + 1) % presets.length)

  useUpdateEffect(() => nextPreset(), [random])

  const {
    textProps: { center, repeat, text, clip, visible, ...textProps },
  } = useTextProps(textPreset)

  return (
    <>
      <ControlsBtn position={10} onClick={nextPreset}>
        💬
      </ControlsBtn>
      <TextGeneral
        text={text.repeat(repeat)}
        rotation={[-Math.PI / 2, 0, 0]}
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
