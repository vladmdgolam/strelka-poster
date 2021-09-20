const Lights = () => {
  //   const transformControls = useRef()
  // const orbitControls = useRef()
  //   useEffect(() => {
  //     if (transformControls.current) {
  //       const { current: controls } = transformControls
  //       const callback = (event) => (orbitControls.current.enabled = !event.value)
  //       controls.addEventListener("dragging-changed", callback)
  //       return () => controls.removeEventListener("dragging-changed", callback)
  //     }
  //   })
  return (
    <>
      <ambientLight intensity={0.3} />
      {/* <TransformControls ref={transformControls} mode="rotate"> */}
      <directionalLight intensity={1.2} castShadow position={[0, 40, 0]} />
      {/* </TransformControls> */}
    </>
  )
}

export default Lights
