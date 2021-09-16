import RandomShape from "@/components/random-shape"
import { nanoid } from "nanoid"
import { useEffect, useMemo, useState } from "react"

const RandomShapes = ({ count, max, maxPos, text }) => {
  const create = () => Array.from({ length: count }, () => nanoid())
  const [arr, setArr] = useState(create())

  useEffect(() => {
    setArr(create())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, max, maxPos])

  const elements = useMemo(
    () => (
      <>
        {arr.map((el) => (
          <RandomShape text={text} key={el} max={max} maxPos={maxPos} />
        ))}
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [arr]
  )

  return elements
}

export default RandomShapes
