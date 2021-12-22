import AppContext from "@/hooks/AppContext"
import { useContext } from "react"
import MenuPad from "./MenuPad"

const ControlsMenu = () => {
  const { menuItems } = useContext(AppContext)
  const { left, main, right } = menuItems || null
  return (
    <menu className="menu-items">
      <MenuPad name="left" items={left} />
      <MenuPad name="main" items={main} />
      <MenuPad name="right" items={right} />
    </menu>
  )
}

export default ControlsMenu
