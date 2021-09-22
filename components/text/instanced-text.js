import { useState } from "react"
import BoxText from "./text-physical"
import { nanoid } from "nanoid"

const create = (count) => Array.from({ length: count }, () => nanoid())

const InstancedText = ({ count = 1 }) => {
  const [arr] = useState(create(count))
  return (
    <>
      {arr.map((el, i) => (
        <BoxText key={el} />
      ))}
    </>
  )
}

export default InstancedText
