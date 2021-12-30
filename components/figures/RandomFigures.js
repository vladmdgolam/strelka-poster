import { randomNumber } from "@/helpers"
import { sizeScale as initSizeScale, range } from "@/helpers/constants"
import AppContext from "@/hooks/AppContext"
import useIsMobile from "@/hooks/useIsMobile"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useContext, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCones from "./RandomCones"
import RandomCylinders from "./RandomCylinders"

const getNewStates = () => ({
  spheresCount: randomNumber(...range),
  boxesCount: randomNumber(...range),
  cylCount: randomNumber(...range),
  conesCount: randomNumber(...range),
})

const RandomFigures = ({ random }) => {
  const isMobile = useIsMobile()
  const [sizeScale, setScale] = useState(
    isMobile ? initSizeScale / 2 : initSizeScale
  )

  useUpdateEffect(
    () => setScale(isMobile ? initSizeScale / 2 : initSizeScale),
    [isMobile]
  )

  const [figuresCount, set] = useState(getNewStates())

  useUpdateEffect(() => {
    set(getNewStates())
  }, [random])

  const { video, videoMode } = useContext(AppContext)

  const childProps = { sizeScale, video: videoMode == "figures" ? video : null }

  const { spheresCount, boxesCount, cylCount, conesCount } = figuresCount

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
