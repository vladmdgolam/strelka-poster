import { useSphere } from "@react-three/cannon"
import { useControls, button } from "leva"
import { useEffect, useMemo, useRef } from "react"
import { Color, InstancedBufferAttribute, Vector3 } from "three"
import ControlsBtn from "@/components/controls/controlsBtn"
import { randomPaletteColor, randomScale, randomVector } from "@/helpers"

// const generatePosition = (index = 0) => [
//   Math.random() - 0.5,
//   index,
//   Math.random() - 0.5,
// ]

const generatePosition = (index = 0) => {
  return randomVector(index)
}

const InstancedSpheres = ({
  number = 100,
  radius = 0.5,
  palette,
  explodeIndex = 0,
  resetIndex = 0,
}) => {
  const { colorsOn } = useControls({ colorsOn: true })

  const [ref, api] = useSphere((index) => ({
    mass: 1,
    position: generatePosition(index),
    args: radius,
  }))

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3)
    const color = new Color()
    for (let i = 0; i < number; i++)
      color
        .set(colorsOn ? randomPaletteColor(palette) : "white")
        .toArray(array, i * 3)
    return array
  }, [number, colorsOn])

  const scales = useMemo(() => {
    const array = new Float32Array(number * 3)
    let scale = new Vector3(0, 0, 0)
    for (let i = 0; i < number; i++) {
      scale.toArray(array, i * 3)
    }
    return array
  }, [number])

  // console.log(scales)

  const reset = () => {
    for (let x = 0; x < number; x++) {
      api.at(x).position.set(...generatePosition(x))
    }
  }

  const explode = () => {
    for (let x = 0; x < number; x++) {
      api.at(x).position.set(...generatePosition())
    }
  }

  const rescale = () => {
    for (let x = 0; x < number; x++) {
      console.log(api)
      api.at(x).scale.set(randomScale(5))
    }
  }

  useEffect(() => {
    explodeIndex && explode()
  }, [resetIndex])
  useEffect(() => {
    explodeIndex && explode()
  }, [explodeIndex])

  useControls({
    reset: button(() => reset()),
    explode: button(() => explode()),
    rescale: button(() => rescale()),
  })

  const geomRef = useRef()
  const scaleValues = new InstancedBufferAttribute(scales, 3)

  useEffect(() => {
    if (geomRef.current) {
      geomRef.current.addAttribute("scale", scaleValues)
      console.log("hi")
    }
  }, [])

  return (
    <>
      <instancedMesh
        ref={ref}
        castShadow
        receiveShadow
        args={[undefined, undefined, number]}
      >
        <sphereBufferGeometry
          ref={geomRef}
          args={[radius, 40, 40]}
          onUpdate={(self) => (self.needsUpdate = true)}
        >
          <instancedBufferAttribute
            attachObject={["attributes", "color"]}
            args={[colors, 3]}
          />
        </sphereBufferGeometry>
        <meshBasicMaterial vertexColors />
      </instancedMesh>
    </>
  )
}

export default InstancedSpheres
