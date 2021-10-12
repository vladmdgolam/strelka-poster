export const massMultiplier = 0.5

export const colors = [
  "#EA3323",
  "#FFFF54",
  "#DA77A2",
  "#42914E",
  "#102FF4",
  "#ED7039",
]

export const colorsExtended = [...colors, "#FFF", "#000"]

export const palettes = [colors, ["#000"], ["#fff"]]

export const sizeScale = 1

export const presets = [
  { text: "STRELKA", fontSize: 1, repeat: 1, center: true },
  {
    text: `STRELKA \nSUMMER\nOPEN CODE`,
    fontSize: 0.4,
    repeat: 1,
    center: true,
  },
  {
    text: `STRELKA SUMMER OPEN CODE `,
    fontSize: 0.4,
    repeat: 100,
    center: false,
  },
]

export const positionsConstants = {
  center: {
    anchorX: "center",
    anchorY: "middle",
    textAlign: "center",
  },
  topLeft: {
    anchorX: "left",
    anchorY: "top",
    textAlign: "justify",
  },
}
