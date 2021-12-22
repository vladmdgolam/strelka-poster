import { useContext, useEffect } from "react"
import AppContext from "@/hooks/AppContext"

const ControlsBtn = ({
  position = 1,
  group = "main",
  description = "description",
  children,
  ...props
}) => {
  const { menuItems, requestSetMenuItems } = useContext(AppContext)

  useEffect(() => {
    menuItems[group] = {
      ...menuItems[group],
      [position]: { name: children, props: { description, ...props } },
    }
    requestSetMenuItems(menuItems)
  }, [children])

  return <></>
}

export default ControlsBtn
