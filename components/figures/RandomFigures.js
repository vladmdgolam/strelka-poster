import { randomNumber } from "@/helpers"
import { sizeScale as initSizeScale } from "@/helpers/constants"
import { folder, useControls } from "leva"
// import { useControls } from "leva"
import { useEffect, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCones from "./RandomCones"
import RandomCylinders from "./RandomCylinders"

const range = [0, 10]

const control = {
  min: 0,
  step: 1,
  max: 30,
}

const RandomFigures = ({ random }) => {
  // const [number, setNumber] = useState(randomNumber(...range))
  const [sizeScale, setScale] = useState(initSizeScale)

  const [{ spheresCount, boxesCount, cylCount, conesCount }, set] = useControls(
    () => ({
      Figures: folder({
        spheresCount: {
          label: "spheres",
          value: randomNumber(...range),
          ...control,
        },
        boxesCount: {
          label: "boxes",
          value: randomNumber(...range),
          ...control,
        },
        cylCount: {
          label: "cylinders",
          value: randomNumber(...range),
          ...control,
        },
        conesCount: {
          label: "cones",
          value: randomNumber(...range),
          ...control,
        },
        minSizePercent: { value: 10, min: 1, max: 100 },
        sizeScale: {
          value: sizeScale,
          onChange: (value) => setScale(value),
          min: 0,
          max: 10,
        },
      }),
    })
  )

  // handle randomize
  useEffect(() => {
    if (random != 0) {
      set({
        spheresCount: randomNumber(...range),
        boxesCount: randomNumber(...range),
        cylCount: randomNumber(...range),
        conesCount: randomNumber(...range),
      })
    }
  }, [random])

  const childProps = { sizeScale }

  return (
    <>
      <RandomSpheres {...childProps} number={spheresCount} />
      <RandomBoxes {...childProps} number={boxesCount} />
      <RandomCylinders {...childProps} number={cylCount} />
      <RandomCones {...childProps} number={conesCount} />
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
