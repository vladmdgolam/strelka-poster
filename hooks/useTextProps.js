import { randomNumber } from "@/helpers"
import { useControls } from "leva"
import { useEffect } from "react"

var randomKey = function (obj) {
  var keys = Object.keys(obj)
  return keys[(keys.length * Math.random()) << 0]
}

const presets = {
  //   1: { text: "STRELKA", scale: 2.5, repeat: 1 },
  // { text: `STRELKA \nSUMMER\nOPEN CODE`, scale: 1, repeat: 1 },
  3: {
    text: `STRELKA SUMMER OPEN CODE `,
    scale: 1,
    repeat: 100,
    fontSize: 0.4,
    textAlign: "left",
    anchorX: "left",
    anchorY: "top",
    topLeft: true,
  },
}

const useTextProps = () => {
  const { presetId } = useControls({
    presetId: {
      value: randomKey(presets),
      options: Object.keys(presets),
    },
  })

  const {
    fontSize,
    topLeft,
    text: initialText,
    repeat,
    textAlign,
    anchorX,
    anchorY,
    ...presetProps
  } = presets[presetId] || {}

  const [{ text, ...textProps }, set] = useControls(() => ({
    fontSize: { value: fontSize || 1, min: 0.1, max: 3, step: 0.01 },
    text: { value: initialText },
    repeat: { value: repeat || 1, min: 1, max: 100 },
    topLeft: { value: topLeft || false },
    textAlign: {
      value: textAlign || "center",
      options: ["center", "left", "right", "justify"],
    },
    anchorX: {
      value: anchorX || "center",
      options: ["center", "left", "right"],
    },
    anchorY: {
      value: anchorY || "middle",
      options: ["bottom", "top", "middle", "top-baseline", "bottom-baseline"],
    },
    overflowWrap: { value: "break-word", options: ["normal" | "break-word"] },
  }))

//   useEffect(() => {
    // set({ ...presets[presetId] })
    // const preset = presets[presetId]
    // console.log({...preset})
    // set({ ...preset })
    // preset && set({ ...preset })
    // console.log(set(...presets[presetId]))
//   }, [presetId])

  return { textProps: { ...presetProps, ...textProps }, text }
}

export default useTextProps
