import AppContext from "@/hooks/AppContext"
import { useContext } from "react"
import MenuPad from "./MenuPad"

const ControlsMenu = ({ init }) => {
  const { menuItems } = useContext(AppContext)
  const { left, main, right } = menuItems || null
  return (
    <menu className="menu-items">
      <MenuPad init={init} name="left" items={left} />
      <MenuPad init={init} name="main" items={main} />
      <MenuPad init={init} name="right" items={right} />
    </menu>
  )
}

export default ControlsMenu
