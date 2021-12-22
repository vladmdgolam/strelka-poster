export const massMultiplier = 0.5

export const colors = ["#FF0000", "#FFFF06", "#FF87CE", "#0DA041", "#0150E6"]

export const colorsExtended = [...colors, "#FFF", "#000"]

export const palettes = [colors, ["#000"], ["#fff"]]

export const sizeScale = 2

export const presets = [
  // {
  //   text: `a`,
  //   fontSize: 1,
  //   repeat: 220,
  //   center: false,
  //   clip: true,
  // },
  // {
  //   text: `a`,
  //   fontSize: 2,
  //   repeat: 220,
  //   center: false,
  //   clip: true,
  // },
  // {
  //   text: `a`,
  //   fontSize: 3,
  //   repeat: 220,
  //   center: false,
  //   clip: true,
  // },
  // {
  //   text: `a`,
  //   fontSize: 4,
  //   repeat: 220,
  //   center: false,
  //   clip: true,
  // },
  // {
  //   text: `a`,
  //   fontSize: 6,
  //   repeat: 220,
  //   center: false,
  //   clip: true,
  // },
  { text: "STRELKA", fontSize: 1, center: true },
  {
    text: `STRELKA \nOPEN CODE`,
    fontSize: 0.4,
    center: true,
  },
  {
    text: `STRELKA OPEN CODE`,
    fontSize: 0.35,
    letterSpacing: 0.014,
    repeat: 111,
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
    // textAlign: "left",
    textAlign: "justify",
  },
}
