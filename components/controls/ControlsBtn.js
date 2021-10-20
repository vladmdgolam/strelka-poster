import useIsMobile from "@/hooks/useIsMobile"
import { useMemo } from "react"
import HtmlWrapper from "../html/html"

const rows = 2

const ControlsBtn = ({ position = 1, name = "click", children, ...props }) => {
  const isMobile = useIsMobile()

  const getStyle = (cols) => ({
    gridRow: rows - Math.floor(position / (cols + 1)),
    gridColumn: ((position - 1) % cols) + 1,
  })

  const { cols, style } = useMemo(() => {
    const cols = isMobile ? 5 : 12
    const style = getStyle(cols)
    return { cols, style }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, position])

  return (
    <HtmlWrapper>
      <div
        className="controls"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        <button {...props} className="btn btn_round" {...{ style }}>
          {children ? children : name}
        </button>
      </div>
    </HtmlWrapper>
  )
}

export default ControlsBtn
