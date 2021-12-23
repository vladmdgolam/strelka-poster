import ControlsBtn from "./controls/ControlsBtn"
import useTakeScreenshot from "@/hooks/useTakeScreenshot"

const ScreenshotHelper = () => {
  const takeScreenshot = useTakeScreenshot()
  return (
    <ControlsBtn
      position={4}
      description="save"
      hotkey="s"
      group="right"
      onClick={takeScreenshot}
    >
      📸
    </ControlsBtn>
  )
}

export default ScreenshotHelper
