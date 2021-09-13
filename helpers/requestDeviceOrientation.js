const requestDeviceOrientation = () => {
  let result
  if (
    window.DeviceOrientationEvent !== undefined &&
    typeof window.DeviceOrientationEvent.requestPermission === "function"
  ) {
    window.DeviceOrientationEvent.requestPermission().then((response) => {
      result = response
    })
  }
  return result
}

export default requestDeviceOrientation
