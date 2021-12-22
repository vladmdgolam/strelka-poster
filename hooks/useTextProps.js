import { positionsConstants, presets } from "@/helpers/constants"

const derivePresetProperties = (presetId) => {
  const presetProps = presets[presetId] || {}

  const positionProps = presetProps.center
    ? positionsConstants.center
    : positionsConstants.topLeft

  return { ...presetProps, ...positionProps }
}

const useTextProps = (presetId) => {
  const {
    fontSize = 1,
    center = false,
    text = "STRELKA",
    repeat = 0,
    textAlign = "center",
    anchorX = "center",
    anchorY = "middle",
    ...presetProps // доп пропы
  } = derivePresetProperties(presetId)

  const textProps = {
    fontSize,
    center,
    text,
    repeat,
    textAlign,
    anchorX,
    anchorY,
  }

  return {
    textProps: { ...presetProps, ...textProps },
  }
}

export default useTextProps
