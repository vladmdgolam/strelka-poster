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

export const random2D = (r) => [Math.random() * r, Math.random() * r]

export const randomSize = (r) => [
  Math.random() * r,
  Math.random() * r,
  Math.random() * r,
]

export const randomScale = (r) =>
  Array.from({ length: 3 }).fill(randomFloat(0.1, r))

export const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
]
