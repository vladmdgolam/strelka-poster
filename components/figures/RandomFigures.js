import { getRandom, randomNumber } from "@/helpers"
import AppContext from "@/hooks/AppContext"
import useIsMobile from "@/hooks/useIsMobile"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { useContext, useMemo, useState } from "react"
import ControlsBtn from "../controls/ControlsBtn"
import RandomSpheres from "../figures/RandomSpheres"
import RandomBoxes from "./RandomBoxes"
import RandomCones from "./RandomCones"
import RandomCylinders from "./RandomCylinders"


const getSizeScale = (count, isMobile) =>
  (1 + (1.5 * (count - 10)) / 45) * isMobile ? 0.5 : 1

const getSizeScales = (count, isMobile) => {
  const _sizeScale = getSizeScale(count, isMobile)
  const multipliers = getRandom(0.1, 2, 4, 4.25)
  return {
    spheresScale: _sizeScale * multipliers[0],
    boxesScale: _sizeScale * multipliers[1],
    cylScale: _sizeScale * multipliers[2],
    conesScale: _sizeScale * multipliers[3],
  }
}

const getFiguresCount = (count) => {
  const _figuresCount = getRandom(0, count / 2, 4, count)
  return {
    spheresCount: _figuresCount[0],
    boxesCount: _figuresCount[1],
    cylCount: _figuresCount[2],
    conesCount: _figuresCount[3],
  }
}

const countRange = [10, 45]

const RandomFigures = ({ random }) => {
  const [count, setCount] = useState(randomNumber(...countRange))
  const isMobile = useIsMobile()

  useUpdateEffect(() => setCount(randomNumber(...countRange)), [random])

  const [figuresCount, sizeScales] = useMemo(
    () => [getFiguresCount(count), getSizeScales(count, isMobile)],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, isMobile]
  )

  const { video, videoMode } = useContext(AppContext)

  const childProps = { video: videoMode == "figures" ? video : null }

  const { spheresCount, boxesCount, cylCount, conesCount } = figuresCount
  const { spheresScale, boxesScale, cylScale, conesScale } = sizeScales

  return (
    <>
      <RandomSpheres
        sizeScale={spheresScale}
        {...childProps}
        number={spheresCount}
      />
      <RandomBoxes sizeScale={boxesScale} {...childProps} number={boxesCount} />
      <RandomCylinders sizeScale={cylScale} {...childProps} number={cylCount} />
      <RandomCones sizeScale={conesScale} {...childProps} number={conesCount} />
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
