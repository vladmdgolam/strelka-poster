import { randomStrelkaColor } from "@/helpers"
import { useSphere } from "@react-three/cannon"
import { useControls, button } from "leva"
import { useMemo } from "react"
import { Color, Object3D } from "three"
import ControlsBtn from "@/components/controls/controlsBtn"

const generatePosition = (index = 0) => [
  Math.random() - 0.5,
  index,
  Math.random() - 0.5,
]

const InstancedCylinders = ({ number = 100, radius = 0.5 }) => {
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
      color.set(colorsOn ? randomStrelkaColor() : "white").toArray(array, i * 3)
    return array
  }, [number, colorsOn])

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

  useControls({
    reset: button(() => reset()),
    explode: button(() => explode()),
  })

  return (
    <>
      <ControlsBtn onClick={explode} position={2}>
        💥
      </ControlsBtn>
      <ControlsBtn onClick={reset} position={3}>
        🎬
      </ControlsBtn>
      <instancedMesh
        ref={ref}
        castShadow
        receiveShadow
        args={[undefined, undefined, number]}
      >
        <sphereBufferGeometry args={[radius, 40, 40]}>
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

export default InstancedCylinders
