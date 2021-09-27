import { randomNumber, randomPalette } from "@/helpers"
import { button, useControls } from "leva"
import { useEffect, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import InstancedSpheres from "./InstancedSpheres"

const InstancedFigures = ({ random }) => {
  const palette = randomPalette()
  const [number, setNumber] = useState(randomNumber(50, 100))
  const [resetIndex, setResetIndex] = useState(0)
  const [explodeIndex, setExplodeIndex] = useState(0)

  const childrenProps = { resetIndex, explodeIndex }

  useEffect(() => {
    if (random != 0) {
      onRandomize()
    }
  }, [random])

  const onRandomize = () => {
    setNumber(randomNumber(50, 100))
  }

  const reset = () => {
    setResetIndex(resetIndex + 1)
  }
  const explode = () => {
    setExplodeIndex(explodeIndex + 1)
  }

  useControls({
    reset: button(() => reset()),
    explode: button(() => explode()),
  })

  return (
    <>
      <ControlsBtn onClick={explode} position={2}>
        💥
      </ControlsBtn>
      <ControlsBtn onClick={reset} position={3}>
        🎬
      </ControlsBtn>
      <InstancedSpheres
        key={number}
        number={number}
        palette={palette}
        {...childrenProps}
      />
    </>
  )
}

export default InstancedFigures
