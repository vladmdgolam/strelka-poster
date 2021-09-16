import { generateRandomPosition, randomNumber, randomStrelkaColor } from "@/helpers"
import { useState } from "react"
import Cylinder from "./cylinder"

const RandomShape = ({ ...props }) => {
  // const type
  const [position] = useState(generateRandomPosition())
  const [color] = useState(randomStrelkaColor())
  const [sizes] = useState([randomNumber(1, 10), randomNumber(1, 10)]) // todo: generateSizes.shape()

  return (
    <Cylinder
      color={color}
      position={position}
      radius={sizes[0]}
      height={sizes[1]}
      
    />
  )
}

export default RandomShape
