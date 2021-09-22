import { randomNumber, randomPalette } from "@/helpers"
import { useEffect, useState } from "react"
import InstancedSpheres from "./instanced-spheres"

const InstancedFigures = ({ random }) => {
  const palette = randomPalette()
  const [number, setNumber] = useState(randomNumber(50, 100))

  useEffect(() => {
    if (random != 0) {
      onRandomize()
    }
  }, [random])

  const onRandomize = () => {
    setNumber(randomNumber(50, 100))
  }
  return (
    <>
      <InstancedSpheres key={number} number={number} palette={palette} />
    </>
  )
}

export default InstancedFigures
