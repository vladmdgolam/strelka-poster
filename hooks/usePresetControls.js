// import { randomNumber } from "@/helpers"
import { presets } from "@/helpers/constants"
import { folder, useControls } from "leva"

const usePresetControls = () => {
  const [{ presetId }, set] = useControls(() => ({
    ["Text"]: folder({
      presetId: {
        // value: randomNumber(0, presets.length - 1),
        label: "Preset",
        value: 2,
        options: [...presets.keys()],
      },
    }),
  }))
  const randomizePreset = () => {
    const newKey = presetId >= presets.length - 1 ? 0 : presetId + 1
    set({
      presetId: newKey,
    })
  }
  return { presetId, randomizePreset }
}

export default usePresetControls
