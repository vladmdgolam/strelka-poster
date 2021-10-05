import useTextProps from "@/hooks/useTextProps"
import { useThree } from "@react-three/fiber"
import ControlsBtn from "../controls/ControlsBtn"
import TextGeneral from "../text"

// const text = `STRELKA SUMMER OPEN CODE `
// const text = `STRELKA `

// const positions = {
//     topLeft:
// }

const Typography = ({ color }) => {
  const { width, height } = useThree(({ viewport }) => viewport)
  const {
    textProps: { topLeft, repeat, ...textProps },
    text,
  } = useTextProps()
  return (
    <>
      {/* <Box position={[-width / 2 + 0.5, 0, -height / 2 + 0.5]} />
      <Box position={[width / 2 - 0.5, 0, height / 2 - 0.5]} /> */}
      <ControlsBtn
        position={10}
        onClick={() =>
          setPreset(presetId == presets.length - 1 ? 0 : presetId + 1)
        }
      >
        💬🔀
      </ControlsBtn>
      <TextGeneral
        textProps={{ ...textProps, color }}
        text={text.repeat(repeat)}
        rotation={[-Math.PI / 2, 0, 0]}
        position={topLeft ? [-width / 2, 0.01, -height / 2] : [0, 0.01, 0]}
        maxWidth={width}
        overflowWrap="break-word"
      />
    </>
  )
}

export default Typography
