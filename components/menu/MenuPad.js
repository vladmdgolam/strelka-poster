import { createRef, useEffect, useState } from "react"
import dynamic from "next/dynamic"

// import LeaderLine from "react-leader-line"
const LeaderLine = dynamic(() => import("react-leader-line"), { ssr: false })

const MenuPad = ({ items, name }) => {
  // const arrLength = items ? Object.keys(items).length : 0
  // const [elRefs, setElRefs] = useState([])
  // const [descRefs, setDescRefs] = useState([])

  // useEffect(() => {
  //   setElRefs((elRefs) =>
  //     Array(arrLength)
  //       .fill()
  //       .map((_, i) => elRefs[i] || createRef())
  //   )
  //   setDescRefs((descRefs) =>
  //     Array(arrLength)
  //       .fill()
  //       .map((_, i) => descRefs[i] || createRef())
  //   )
  // }, [items])

  //   useEffect(() => {
  //     for (let i; i < elRefs.length; i++) {
  //       //   new LeaderLine(elRefs[i].current, descRefs[i].current, {
  //       //     endPlug: "behind",
  //       //   })
  //     }
  //   }, [elRefs])

  return (
    <div className={name}>
      {/* <main className="descriptions">
        {items &&
          Object.entries(items).map(([key]) => (
            <p className="description" key={key}>
              description
            </p>
          ))}
      </main> */}
      {/* <div className="menu-pad"> */}
      {items &&
        Object.entries(items).map(([key, { name, props }]) => (
          <div className="btn btn_round" key={key} {...props}>
            {name}
          </div>
        ))}
      {/* </div> */}
    </div>
  )
}

export default MenuPad
