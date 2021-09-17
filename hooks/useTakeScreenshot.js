import { useThree } from "@react-three/fiber"
import takeScreenshot from "@/helpers/takeScreenshot"

const useTakeScreenshot = () => {
  const [gl, size, scene, camera] = useThree(({ gl, size, scene, camera }) => [
    gl,
    size,
    scene,
    camera,
  ])

  const takePhoto = () => takeScreenshot(gl, size, scene, camera)
  return takePhoto
}

export default useTakeScreenshot
