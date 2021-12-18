import { positionsConstants, presets } from "@/helpers/constants"

const derivePresetProperties = (presetId) => {
  const presetProps = presets[presetId] || {}

  const positionProps = presetProps.center
    ? positionsConstants.center
    : positionsConstants.topLeft

  return { ...presetProps, ...positionProps }
}

// const [{ ...textProps }, set] = useControls(() => ({
//   ["Text"]: folder({
//     fontSize: { value: fontSize || 1, min: 0.1, max: 3, step: 0.01 },
//     text: { value: text || "STRELKA" },
//     repeat: { value: repeat || 1, min: 1, max: 300 },
//     center: { value: center || false },
//     textAlign: {
//       value: textAlign || "center",
//       options: ["center", "left", "right", "justify"],
//     },
//     anchorX: {
//       value: anchorX || "center",
//       options: ["center", "left", "right"],
//     },
//     anchorY: {
//       value: anchorY || "middle",
//       options: ["bottom", "top", "middle", "top-baseline", "bottom-baseline"],
//     },
//   }),
// }))

// useEffect(() => {
//   set({
//     fontSize,
//     center,
//     text,
//     repeat,
//     textAlign,
//     anchorX,
//     anchorY,
//   })
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [presetId])

const useTextProps = (presetId) => {
  const {
    // пропы, используемые в UI
    fontSize,
    center,
    text,
    repeat,
    textAlign,
    anchorX,
    anchorY,
    ...presetProps // доп пропы
  } = derivePresetProperties(presetId)

  const textProps = {
    fontSize: fontSize || 1,
    center: center || false,
    text: text || "STRELKA",
    repeat: repeat || 1,
    textAlign: textAlign || "center",
    anchorX: anchorX || "center",
    anchorY: anchorY || "middle",
  }

  return {
    textProps: { ...presetProps, ...textProps },
  }
}

export default useTextProps
