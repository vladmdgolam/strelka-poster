import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"
import cn from "classnames"
import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Overlay = forwardRef(({ init, start, theme }, ref) => {
  return (
    <div className={cn("overlay", theme)} ref={ref}>
      {!init && <IntroScreen start={start} />}
      <ControlsMenu init={init} />
    </div>
  )
})

export default Overlay
