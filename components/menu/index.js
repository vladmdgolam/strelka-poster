import AppContext from "@/hooks/AppContext"
import { useContext } from "react"

const ControlsMenu = () => {
  const { menuItems } = useContext(AppContext)

  return (
    <menu className="menu-items">
      <div className="left">
        {menuItems &&
          menuItems["left"] &&
          Object.entries(menuItems["left"]).map(([key, { name, props }]) => (
            <div className="btn btn_round" key={key} {...props}>
              {name}
            </div>
          ))}
      </div>

      <div className="main">
        {menuItems &&
          menuItems["main"] &&
          Object.entries(menuItems["main"]).map(([key, { name, props }]) => (
            <div className="btn btn_round" key={key} {...props}>
              {name}
            </div>
          ))}
      </div>

      <div className="right">
        {menuItems &&
          menuItems["right"] &&
          Object.entries(menuItems["right"]).map(([key, { name, props }]) => (
            <div className="btn btn_round" key={key} {...props}>
              {name}
            </div>
          ))}
      </div>
    </menu>
  )
}

export default ControlsMenu
