const takeScreenshot = (gl, size, scene, camera) => {
  // gl.setSize(size.width, size.height, false)
  // gl.render(scene, camera, null, false)

  gl.domElement.toBlob(
    function (blob) {
      var a = document.createElement("a")
      var url = URL.createObjectURL(blob)
      a.href = url
      a.download = "strelka.png"
      a.click()
    },
    "image/png",
    1.0
  )
}

export default takeScreenshot
