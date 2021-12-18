import { usePlane } from "@react-three/cannon"
import useUpdateEffect from "@/hooks/useUpdateEffect"

const Plane = ({
  position = [0, 0, 0],
  rotation = [-Math.PI / 2, 0, 0],
  ...rest
}) => {
  const [, api] = usePlane(() => ({
    position,
    rotation,
    args: [10, 10],
    ...rest,
  }))

  useUpdateEffect(() => api.position.set(...position), [position])

  useUpdateEffect(() => api.rotation.set(...rotation), [rotation])

  return <></>
}

export default Plane
