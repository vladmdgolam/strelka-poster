import { useContext, useEffect } from "react"
import AppContext from "@/hooks/AppContext"
import Hotkey from "./Hotkey"

const ControlsBtn = ({
  position = 1,
  group = "main",
  name,
  children,
  deps,
  ...props
}) => {
  const { menuItems, requestSetMenuItems } = useContext(AppContext)

  useEffect(() => {
    menuItems[group] = {
      ...menuItems[group],
      [position]: { name: name ? name : children, props },
    }
    requestSetMenuItems(menuItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, deps])

  return props.hotkey && props.onClick ? (
    <Hotkey targetKeys={props.hotkey} callback={props.onClick} />
  ) : null
}

export default ControlsBtn
