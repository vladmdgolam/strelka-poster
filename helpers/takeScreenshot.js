const takeScreenshot = (gl, size, scene, camera) => {
  // gl.setSize(size.width, size.height, false)
  // gl.render(scene, camera, null, false)
  gl.domElement.getContext("webgl", {
    preserveDrawingBuffer: true,
  })
  gl.domElement.toBlob(
    function (blob) {
      var a = document.createElement("a")
      var url = URL.createObjectURL(blob)
      a.href = url
      a.download = "strelka.jpg"
      a.click()
    },
    "image/jpg",
    1.0
  )
  gl.domElement.getContext("webgl", { preserveDrawingBuffer: false })
}

export default takeScreenshot
