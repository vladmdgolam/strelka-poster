/**
 * This function can be used to calculate the orientation of the user interface relative to the world.
 * HTML5 provides the window.orientation property, which is the orientation of the interface relative to the device.
 * HTML5 also provides a deviceOrientation event, which provides the orientation of the device relative to the world.
 * By combining these two we can find the orientation of the interface relative to the world, which is what we usually want.
 * Without this function the alpha (the compass heading of the device) will change by 90 degrees if you rotate your mobile device between portrait and landscape orientation.
 * This is rarely what we want. The usefulFunction fixes this, and provides the orientation of the interface relative to the world.
 * When the device is rotated and the interface automatically changes orientation, the alpha, beta and gamma values produced by usefulOrientation will work as predicted.
 *
 */

const usefulOrientation = (alpha, beta, gamma) => {
  alpha -= window.orientation
  while (alpha < 0) alpha += 360
  while (alpha > 360) alpha -= 360
  if (window.orientation === 180) {
    return { alpha: alpha, beta: -beta, gamma: -gamma }
  } else if (window.orientation === 90) {
    return { alpha: alpha, beta: -gamma, gamma: beta }
  } else if (window.orientation === -90) {
    return { alpha: alpha, beta: gamma, gamma: -beta }
  } else {
    return { alpha: alpha, beta: beta, gamma: gamma }
  }
}

export default usefulOrientation
