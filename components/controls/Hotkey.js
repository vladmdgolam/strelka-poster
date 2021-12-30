import useHotkey from "@/hooks/useHotkey"

const Hotkey = ({ targetKeys, callback, deps = [] }) => {
  useHotkey(targetKeys, callback, deps)
  return <></>
}

export default Hotkey
