import useIsMobile from "@/hooks/useIsMobile"
import { useEffect, useState } from "react"
import HtmlWrapper from "../html/html"

const rows = 2

const ControlsBtn = ({ position = 1, name = "click", children, ...props }) => {
  const isMobile = useIsMobile()
  const [cols, setCols] = useState(isMobile ? 5 : 12)

  useEffect(() => {
    setCols(isMobile ? 5 : 12)
  }, [isMobile])

  const gridColumn = position % cols
  const gridRow = rows - Math.floor(position / (cols + 1))
  
  return (
    <HtmlWrapper zIndexRange={[100, 0]}>
      <div
        className="controls"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        <button
          {...props}
          className="btn btn_round"
          style={{ gridColumn, gridRow }}
        >
          {children ? children : name}
        </button>
      </div>
    </HtmlWrapper>
  )
}

export default ControlsBtn
