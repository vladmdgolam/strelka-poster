import { randomNumber } from "@/helpers"
import { sizeScale as initSizeScale } from "@/helpers/constants"
// import { useControls } from "leva"
import { useEffect, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCylinders from "./RandomCylinders"

const range = [0, 6]

const RandomFigures = ({ random }) => {
  const [number, setNumber] = useState(randomNumber(...range))
  const [sizeScale] = useState(initSizeScale)

  // handle randomize
  useEffect(() => {
    if (random != 0) {
      // setSizeScale(1, 5)
      setNumber(randomNumber(...range))
    }
  }, [random])

  const reset = () => {}
  const explode = () => {}

  const childProps = { sizeScale, number }

  return (
    <>
      {/* TODO: make it red when full */}
      <ControlsBtn
        onClick={() =>
          setNumber(number < 100 ? number + 25 : randomNumber(...range))
        }
        position={7}
      >
        +⚪️⬜️
      </ControlsBtn>
      <RandomSpheres {...childProps} />
      <RandomBoxes {...childProps} />
      <RandomCylinders {...childProps} />
    </>
  )
}

export default RandomFigures
