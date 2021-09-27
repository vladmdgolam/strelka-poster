import { Instance, Instances } from "@react-three/drei"
import {
  randomEuler,
  randomScale,
  randomStrelkaColor,
  randomVector,
} from "@/helpers"
import { useSphere } from "@react-three/cannon"
import { nanoid } from "nanoid"
import { useEffect, useMemo, useState } from "react"

const r = 0.488; // sqrt(3/π)/2

const generateRandomData = (number, r = 10, s = 0.1) =>
  Array.from({ length: number }, () => ({
    position: randomVector(r),
    scale: randomScale(s),
    rotation: randomEuler(),
    color: randomStrelkaColor(),
    id: nanoid(),
  }))

const RandomSpheres = ({number = 10}) => {
  // const [number, setNumber] = useState(10)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generateRandomData(number), [number])
  // const additionalData = useMemo(() => generateRandomData(number), [number, show])
  // const [show, setShow] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true)
  //     // setNumber(9)
  //   }, 3000)
    // setTimeout(() => {
    //   setShow(true)
    // }, 6000)
  // }, [])

  
  return (
    <Instances>
      <sphereBufferGeometry args={[r, 32, 32]} />
      <meshBasicMaterial />
      {data.map(({ id, ...props }) => (
        <Sphere key={id} {...props} />
      ))}
      {/* {show &&
        additionalData.map(({ id, ...props }) => (
          <Sphere key={id} {...props} />
        ))} */}
    </Instances>
  )
}

const Sphere = ({ scale = [1, 1, 1], color = "white", ...rest }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    args: scale[0],
    linearDamping: 0.7,
    angularDamping: 0.7,
    ...rest,
  }))
  return (
    <group ref={ref} scale={scale}>
      <Instance color={color} />
    </group>
  )
}

export default RandomSpheres
