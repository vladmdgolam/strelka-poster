import { createContext } from "react"

const AppContext = createContext({
  isMobile: null,
  setIsMobile: null,

  menuIndex: null,
  requestSetMenuItems: null,

  menuItems: null,
  setMenuItems: null,

  video: null,
  setVideo: null,
})

export const AppProvider = AppContext.Provider

export default AppContext
