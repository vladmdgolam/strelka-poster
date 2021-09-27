import { useState } from "react"
import BoxText from "./text-physical"
import { nanoid } from "nanoid"
import { randomAbsVector, randomFloat } from "@/helpers"

// const create = (count) => Array.from({ length: count }, () => nanoid())

const texts = ["STRELKA", "SUMMER", "OPEN CODE"]
// const texts = [
//   "ПРИВЕТ",
//   "А ЛЕТО КТО ГОТОВИТЬ БУДЕТ",
//   "Тащить винчик или нет?",
//   "А я друга притащу извините",
// ]

export const generateTextData = (posR = 10) =>
  Array.from({ length: texts.length }, (i) => ({
    position: randomAbsVector(posR),
    // scale: sizeScale,
    id: nanoid(),
  }))

const InstancedText = () => {
  // const [arr] = useState(create(count))
  const [data] = useState(generateTextData())
  console.log(data)
  return (
    <>
      {data.map(({ id, ...props }, i) => (
        <BoxText key={i} text={texts[i]} {...props} />
      ))}
    </>
  )
}

export default InstancedText
