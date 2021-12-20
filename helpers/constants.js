export const massMultiplier = 0.5

export const colors = ["#FF0000", "#FFFF06", "#FF87CE", "#0DA041", "#0150E6"]

export const colorsExtended = [...colors, "#FFF", "#000"]

export const palettes = [colors, ["#000"], ["#fff"]]

export const sizeScale = 2

export const presets = [
  { text: "STRELKA", fontSize: 1, center: true },
  {
    text: `STRELKA \nOPEN CODE`,
    fontSize: 0.4,
    center: true,
  },
  {
    text: `STRELKA OPEN CODE `,
    fontSize: 0.34,
    repeat: 100,
    center: false,
    clip: true,
  },
  {
    visible: false,
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
