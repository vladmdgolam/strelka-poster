import { randomNumber } from "@/helpers"
import { sizeScale as initSizeScale } from "@/helpers/constants"
import { useControls } from "leva"
// import { useControls } from "leva"
import { useEffect, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCylinders from "./RandomCylinders"

const range = [0, 10]

const RandomFigures = ({ random }) => {
  const [number, setNumber] = useState(randomNumber(...range))
  const [sizeScale, setScale] = useState(initSizeScale)

  useControls("Figures", {
    number: {
      value: number,
      onChange: (value) => setNumber(value),
      min: 0,
      max: 30,
    },
    sizeScale: {
      value: sizeScale,
      onChange: (value) => setScale(value),
      min: 0,
      max: 10,
    },
  })

  // handle randomize
  useEffect(() => {
    if (random != 0) {
      // setSizeScale(1, 5)
      setNumber(randomNumber(...range))
    }
  }, [random])

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

/* TODO: make it red when full */
export const IncreaseFigures = ({ setNumber, number }) => {
  return (
    <ControlsBtn
      onClick={() =>
        setNumber(number < 100 ? number + 25 : randomNumber(...range))
      }
      position={7}
    >
      +⚪️⬜️
    </ControlsBtn>
  )
}
