import { useThree } from "@react-three/fiber"
import takeScreenshot from "@/helpers/takeScreenshot"
import useHotkey from "./useHotkey"

const useTakeScreenshot = () => {
  const gl = useThree(({ gl }) => gl)

  const takePhoto = () => takeScreenshot(gl)

  useHotkey(["s"], takePhoto)

  return takePhoto
}

export default useTakeScreenshot
