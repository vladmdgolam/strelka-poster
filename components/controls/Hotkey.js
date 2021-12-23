import useHotkey from "@/hooks/useHotkey"

const Hotkey = ({ targetKeys, callback }) => {
  useHotkey(targetKeys, callback)
  return <></>
}

export default Hotkey
