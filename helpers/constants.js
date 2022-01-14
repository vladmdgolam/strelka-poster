export const massMultiplier = 0.5

export const colors = {
  red: "#FF0000",
  yellow: "#FFFF06",
  pink: "#FF87CE",
  green: "#0DA041",
  blue: "#0150E6",
}

export const colorsExtended = { ...colors, white: "#FFF", black: "#000" }
export const lightColors = ["white", "yellow"]

export const colorMatch = {
  red: ["pink", "white"],
  green: ["white"],
  blue: ["white", "pink"],
  pink: ["white", "blue"],
  yellow: ["white", "green", "red", "blue", "black"],
  white: ["black", "green", "red", "pink", "blue"],
  black: ["white", "yellow"],
}

export const palettes = [colors, ["#000"], ["#fff"]]

export const sizeScale = 1.5

export const range = [0, 14]

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

export const keyCodes = {
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
}
