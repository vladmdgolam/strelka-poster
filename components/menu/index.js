import HtmlWrapper from "../html/html"
import AppContext from "@/hooks/AppContext"
import { useContext, useEffect } from "react"

const ControlsMenu = () => {
  const { menuItems } = useContext(AppContext)

  return (
    <HtmlWrapper className="menu-items">
      <menu>
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
    </HtmlWrapper>
  )
}

export default ControlsMenu
