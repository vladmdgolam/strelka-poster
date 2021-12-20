import AppContext from "@/hooks/AppContext"
import { useContext } from "react"

const ControlsMenu = () => {
  const { menuItems } = useContext(AppContext)
  const { left, main, right } = menuItems || null
  return (
    <menu className="menu-items">
      {menuItems ? (
        <>
          <div className="left">{left && <MenuPad items={left} />}</div>
          <div className="main">{main && <MenuPad items={main} />}</div>
          <div className="right">{right && <MenuPad items={right} />}</div>
        </>
      ) : null}
    </menu>
  )
}

const MenuPad = ({ items }) =>
  Object.entries(items).map(([key, { name, props }]) => (
    <div className="btn btn_round" key={key} {...props}>
      {name}
    </div>
  ))

export default ControlsMenu
