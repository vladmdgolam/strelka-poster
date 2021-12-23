import IntroScreen from "@/components/html/intro-screen"
import ControlsMenu from "@/components/menu"

import cn from "classnames"

const Overlay = ({ init, start, colorTheme }) => {
  return (
    <div className={cn("contents", colorTheme)}>
      {!init && <IntroScreen start={start} />}
      <ControlsMenu init={init} />
    </div>
  )
}

export default Overlay
