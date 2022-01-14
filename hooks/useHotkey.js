import { keyCodes } from "@/helpers/constants"
import { useContext, useEffect } from "react"
import AppContext from "./AppContext"

const useHotkey = (targetKeys, callback, deps = []) => {
  const { editingMode } = useContext(AppContext)

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === keyCodes[targetKeys[0]] && !editingMode) callback()
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingMode, ...deps])
}

export default useHotkey
