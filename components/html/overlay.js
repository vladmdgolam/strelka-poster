import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"
import { randomNumber } from "@/helpers"
import { colorMatch } from "@/helpers/constants"
import cn from "classnames"
import { useMemo } from "react"

const Overlay = ({ init, start, color }) => {
  const theme = useMemo(() => {
    let avaliableColors = colorMatch[color]
    return avaliableColors[randomNumber(0, avaliableColors.length - 1)]
  }, [color])

  return (
    <div className={cn("contents", theme)}>
      {!init && <IntroScreen start={start} />}
      <ControlsMenu init={init} />
    </div>
  )
}

export default Overlay
