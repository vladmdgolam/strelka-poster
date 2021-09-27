import { randomNumber } from "@/helpers"
import { useEffect, useState } from "react"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCylinders from "./RandomCylinders"

const RandomFigures = ({ random }) => {
  const [number, setNumber] = useState(randomNumber(20, 30))

  useEffect(() => {
    if (random != 0) {
      onRandomize()
    }
  }, [random])

  const onRandomize = () => {
    setNumber(randomNumber(50, 100))
  }

  const reset = () => {}
  const explode = () => {}

  return (
    <>
      <RandomSpheres number={number} />
      {/* <RandomBoxes number={number} />
      <RandomCylinders number={number} /> */}
    </>
  )
}

export default RandomFigures
