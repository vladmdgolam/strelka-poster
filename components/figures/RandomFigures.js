import { randomNumber } from "@/helpers"
import { sizeScale as initSizeScale } from "@/helpers/constants"
import { useEffect, useState } from "react"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCylinders from "./RandomCylinders"

const range = [10, 20]

const RandomFigures = ({ random }) => {
  const [number, setNumber] = useState(randomNumber(...range))
  const [sizeScale, setSizeScale] = useState(initSizeScale)

  // handle randomize
  useEffect(() => {
    if (random != 0) {
      setNumber(randomNumber(...range))
      setSizeScale(1, 5)
    }
  }, [random])

  const reset = () => {}
  const explode = () => {}

  const childProps = { sizeScale, number }

  return (
    <>
      <RandomSpheres {...childProps} />
      <RandomBoxes {...childProps} />
      <RandomCylinders {...childProps} />
    </>
  )
}

export default RandomFigures
