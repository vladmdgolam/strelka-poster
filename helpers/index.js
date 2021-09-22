import { colors, palettes } from "./constants"

export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomStrelkaColor = () =>
  colors[randomNumber(0, colors.length - 1)]

export const randomPalette = () =>
  palettes[randomNumber(0, palettes.length - 1)]

export const randomPaletteColor = (palette) =>
  palette[randomNumber(0, palette.length - 1)]

export const generateRandomPosition = (maxPos = { x: 10, y: 10, z: 10 }) => [
  randomNumber(1, maxPos.x),
  randomNumber(1, maxPos.y),
  randomNumber(1, maxPos.z),
]
