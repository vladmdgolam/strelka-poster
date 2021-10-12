import { nanoid } from "nanoid"
import { colors, palettes, colorsExtended } from "./constants"

export const randomFloat = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

// integer
export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomStrelkaColor = () =>
  colors[randomNumber(0, colors.length - 1)]

export const randomExtendedColor = () =>
  colorsExtended[randomNumber(0, colorsExtended.length - 1)]

export const randomPalette = () =>
  palettes[randomNumber(0, palettes.length - 1)]

export const randomPaletteColor = (palette) =>
  palette[randomNumber(0, palette.length - 1)]

export const generateRandomPosition = (maxPos = { x: 10, y: 10, z: 10 }) => [
  randomNumber(1, maxPos.x),
  randomNumber(1, maxPos.y),
  randomNumber(1, maxPos.z),
]

export const randomVector = (r) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
]

export const randomAbsVector = (r) => [
  Math.random() * r,
  Math.random() * r,
  Math.random() * r,
]

export const figureScale = (figure = "sphere", r = 1) => {
  switch (figure) {
    case "sphere":
      return Array.from({ length: 3 }).fill(Math.random() * r)
    case "box":
      return [Math.random() * r, Math.random() * r, Math.random() * r]
    case "cylinder":
      return Array.from({ length: 2 }).fill(() => Math.random() * r)
    default:
      break
  }
}

export const generateFigureData = ({
  figure = "sphere",
  number = 10,
  sizeScale = 0.1,
  posR = 10,
}) =>
  Array.from({ length: number }, () => ({
    position: randomVector(posR),
    scale: figureScale(figure, sizeScale),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
    id: nanoid(),
  }))

export const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
]


// const getRandomText = () => {
//   return texts[Math.floor(Math.random() * texts.length)]
// }

export const randomKey = (obj) => {
  var keys = Object.keys(obj)
  return keys[(keys.length * Math.random()) << 0]
}