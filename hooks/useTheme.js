import { randomExtendedColor } from "@/helpers"
import { lightColors } from "@/helpers/constants"
import getThemeFromColor from "@/helpers/getThemeFromColor"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useState } from "react"

const useColors = (random, initialColor, initialTheme) => {
  const [bgColor, setBgColor] = useState(initialColor)
  const [theme, setTheme] = useState(initialTheme)
  
  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setBgColor(nextColor)
  }, [random])

  useUpdateEffect(() => {
    setTheme(getThemeFromColor(bgColor))
  }, [bgColor])

  const colorTheme = lightColors.includes(bgColor) ? "black" : "white"
  return { colorTheme, color: bgColor, theme }
}

export default useColors
