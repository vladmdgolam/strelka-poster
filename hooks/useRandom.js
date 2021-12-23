import { useState } from "react"

const useRandom = () => {
  const [random, setRandom] = useState(0)
  const randomize = () => setRandom(Math.random())
  return { random, randomize }
}

export default useRandom
