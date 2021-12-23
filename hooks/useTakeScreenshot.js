import { useThree } from "@react-three/fiber"
import takeScreenshot from "@/helpers/takeScreenshot"

const useTakeScreenshot = () => {
  const gl = useThree(({ gl }) => gl)

  const takePhoto = () => takeScreenshot(gl)

  return takePhoto
}

export default useTakeScreenshot
