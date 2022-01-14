import { randomNumber } from "@/helpers"
import { colorMatch } from "@/helpers/constants"

const getThemeFromColor = (color) => {
  const avaliableColors = colorMatch[color]
  return avaliableColors[randomNumber(0, avaliableColors.length - 1)]
}

export default getThemeFromColor
