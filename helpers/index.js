import { colors } from "./constants"

export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomStrelkaColor = () =>
  colors[randomNumber(0, colors.length - 1)]
