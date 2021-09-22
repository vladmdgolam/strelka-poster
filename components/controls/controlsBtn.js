import HtmlWrapper from "../html/html"

const ControlsBtn = ({ position = 1, name = "click", children, ...props }) => {
  return (
    <HtmlWrapper zIndexRange={[100, 0]}>
      <div className="controls">
        <button
          {...props}
          className="btn btn_round"
          style={{ gridColumn: position }}
        >
          {children ? children : name}
        </button>
      </div>
    </HtmlWrapper>
  )
}

export default ControlsBtn
