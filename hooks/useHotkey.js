import { useContext, useEffect } from "react"
import AppContext from "./AppContext"

const useHotkey = (targetKeys, callback) => {
  const { editingMode } = useContext(AppContext)

  const handleKeyDown = ({ key }) => {
    if (targetKeys.indexOf(key.toLowerCase()) !== -1 && !editingMode) callback()
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingMode])
}

export default useHotkey
