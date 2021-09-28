import { Box } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import TextGeneral from "../text"

// const text = `STRELKA SUMMER OPEN CODE `
const text = `STRELKA `

// const positions = {
//     topLeft:
// }

const Typography = ({color}) => {
  const { width, height } = useThree(({ viewport }) => viewport)

  const { repeat, ...textProps } = useControls({
    fontSize: { value: 1, min: 0.1, max: 3, step: 0.01 },
    repeat: { value: 1, min: 1, max: 100 },
    textAlign: {
      value: "center",
      options: ["center", "left", "right", "justify"],
    },
    anchorX: { value: "center", options: ["center", "left", "right"] },
    anchorY: {
      value: "middle",
      options: ["bottom", "top", "middle", "top-baseline", "bottom-baseline"],
    },
    overflowWrap: { value: "break-word", options: ["normal" | "break-word"] },
  })

  return (
    <>
      {/* <Box position={[-width / 2 + 0.5, 0, -height / 2 + 0.5]} />
      <Box position={[width / 2 - 0.5, 0, height / 2 - 0.5]} /> */}
      <TextGeneral
        textProps={{ ...textProps, color }}
        text={text.repeat(repeat)}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, 0]}
        // position={[-width / 2, 0.01, -height / 2]}
        maxWidth={width}
        scale={1}
      />
      {/* <group scale={1}>
        <TextGeneral
          text={`STRELKA \nSUMMER\nOPEN CODE`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, 0]}
        />
      </group> */}
    </>
  )
}

export default Typography
