import usePresetControls from "@/hooks/usePresetControls"
import useTextProps from "@/hooks/useTextProps"
import { useThree } from "@react-three/fiber"
import ControlsBtn from "../controls/ControlsBtn"
import TextGeneral from "../text"

const Typography = ({ color }) => {
  const { width, height } = useThree(({ viewport }) => viewport)
  const { presetId, randomizePreset } = usePresetControls()

  const {
    textProps: { center, repeat, text, ...textProps },
  } = useTextProps(presetId)

  return (
    <>
      <ControlsBtn position={10} onClick={randomizePreset}>
        💬🔀
      </ControlsBtn>
      <TextGeneral
        text={text.repeat(repeat)}
        rotation={[-Math.PI / 2, 0, 0]}
        position={center ? [0, 0.01, 0] : [-width / 2, 0.01, -height / 2]}
        maxWidth={width}
        overflowWrap="break-word"
        {...textProps}
        color={color}
      />
    </>
  )
}

export default Typography
