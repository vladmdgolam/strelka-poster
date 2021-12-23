import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"
import { randomNumber } from "@/helpers"
import { colorMatch } from "@/helpers/constants"
import cn from "classnames"
import { forwardRef, useMemo } from "react"

// eslint-disable-next-line react/display-name
const Overlay = forwardRef(({ init, start, color }, ref) => {
  const theme = useMemo(() => {
    let avaliableColors = colorMatch[color]
    return avaliableColors[randomNumber(0, avaliableColors.length - 1)]
  }, [color])

  return (
    <div className={cn("overlay", theme)} ref={ref}>
      {!init && <IntroScreen start={start} />}
      <ControlsMenu init={init} />
    </div>
  )
})

export default Overlay
