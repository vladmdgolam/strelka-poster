import { randomExtendedColor } from "@/helpers"
import { lightColors } from "@/helpers/constants"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useState } from "react"

const initialColor = randomExtendedColor()

const useColors = (random) => {
  const [color, setColor] = useState(initialColor)
  useUpdateEffect(() => {
    const nextColor = randomExtendedColor()
    setColor(nextColor)
  }, [random])

  const colorTheme = lightColors.includes(color) ? "black" : "white"
  return { colorTheme, color, initialColor }
}

export default useColors
