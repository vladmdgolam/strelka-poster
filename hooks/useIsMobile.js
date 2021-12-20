import { useContext } from "react"

import AppContext from "@/hooks/AppContext"

const useIsMobile = () => {
  return useContext(AppContext).isMobile
}

export default useIsMobile
