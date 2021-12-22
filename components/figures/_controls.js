// const [{ spheresCount, boxesCount, cylCount, conesCount }, set] = useControls(
//   () => ({
//     Figures: folder({
//       spheresCount: {
//         label: "spheres",
//         value: randomNumber(...range),
//         ...control,
//       },
//       boxesCount: {
//         label: "boxes",
//         value: randomNumber(...range),
//         ...control,
//       },
//       cylCount: {
//         label: "cylinders",
//         value: randomNumber(...range),
//         ...control,
//       },
//       conesCount: {
//         label: "cones",
//         value: randomNumber(...range),
//         ...control,
//       },
//       minSizePercent: { value: 10, min: 1, max: 100 },
//       sizeScale: {
//         value: sizeScale,
//         onChange: (value) => setScale(value),
//         min: 0,
//         max: 10,
//       },
//     }),
//   })
// )

// const control = {
//   min: 0,
//   step: 1,
//   max: 30,
// }