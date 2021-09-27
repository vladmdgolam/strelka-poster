import { createContext } from "react"

const AppContext = createContext({
  isMobile: null,
  setIsMobile: null,
})

export const AppProvider = AppContext.Provider

export default AppContext
