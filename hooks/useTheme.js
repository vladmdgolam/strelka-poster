import { randomExtendedColor } from "@/helpers"
import { lightColors } from "@/helpers/constants"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useState } from "react"

const useColors = (random) => {
  const [initialColor] = useState(randomExtendedColor())
  const [bgColor, setBgColor] = useState(initialColor)
  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setBgColor(nextColor)
  }, [random])

  const colorTheme = lightColors.includes(bgColor) ? "black" : "white"
  console.log(lightColors, bgColor, colorTheme)
  return { colorTheme, color: bgColor, initialColor }
}

export default useColors
