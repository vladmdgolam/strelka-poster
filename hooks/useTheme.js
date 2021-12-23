import { randomExtendedColor } from "@/helpers"
import { lightColors } from "@/helpers/constants"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useState } from "react"

const initialColor = randomExtendedColor()

const useColors = (random) => {
  const [bgColor, setBgColor] = useState(initialColor)
  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setBgColor(nextColor)
  }, [random])

  const colorTheme = lightColors.includes(bgColor) ? "black" : "white"
  return { colorTheme, color: bgColor, initialColor }
}

export default useColors
