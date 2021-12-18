import { useContext } from "react"
import AppContext from "@/hooks/AppContext"

const useRandom = () => useContext(AppContext).random

export default useRandom
