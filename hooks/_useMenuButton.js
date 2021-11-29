import { useContext, useEffect } from "react"
import AppContext from "@/hooks/AppContext"

const ControlsBtn = ({
  position = 1,
  group = "main",
  name = "click",
  children,
  ...props
}) => {
  const { menuItems, requestSetMenuItems } = useContext(AppContext)

  useEffect(() => {
    menuItems[group] = {
      ...menuItems[group],
      [position]: { name: children, props },
    }
    requestSetMenuItems(menuItems)
  }, [])

  return <></>
}

export default ControlsBtn
