import { nanoid } from "nanoid"
import { useEffect, useMemo, useState } from "react"
import Sphere from "./sphere"

const generatePosition = (index = 0) => [
  Math.random() - 0.5,
  index,
  Math.random() - 0.5,
]

const RandomSpheres = ({ count = 100 }) => {
  const create = () => Array.from({ length: count }, () => nanoid())
  const [arr, setArr] = useState(create())

  useEffect(() => {
    setArr(create())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const elements = useMemo(
    () => (
      <>
        {arr.map((el, i) => (
          <Sphere key={el} position={generatePosition(i)} />
        ))}
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [arr]
  )

  return elements
}

export default RandomSpheres
