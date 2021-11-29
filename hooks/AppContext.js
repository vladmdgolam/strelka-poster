import { createContext } from "react"

const AppContext = createContext({
  isMobile: null,
  setIsMobile: null,

  menuIndex: null,
  requestSetMenuItems: null,

  menuItems: null,
  setMenuItems: null,
})

export const AppProvider = AppContext.Provider

export default AppContext
