export const massMultiplier = 0.5

export const colors = {
  red: "#FF0000",
  yellow: "#FFFF06",
  pink: "#FF87CE",
  green: "#0DA041",
  blue: "#0150E6",
}

export const colorsExtended = { ...colors, white: "#FFF", black: "#000" }
export const lightColors = [colorsExtended.white, colorsExtended.yellow]

export const colorMatch = {
  red: ["pink", "white"],
  green: ["white"],
  blue: ["white", "pink"],
  pink: ["white", "blue"],
  yellow: ["white", "green", "red", "pink", "blue", "black"],
  white: ["black", "green", "red", "pink", "blue"], // not light
  black: ["white", "yellow"],
}

export const palettes = [colors, ["#000"], ["#fff"]]

export const sizeScale = 2

export const range = [0, 7]

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
    letterSpacing: 0,
  },
  {
    text: `STRELKA OPEN CODE`,
    fontSize: 0.35,
    letterSpacing: 0.014,
    repeat: 1,
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
