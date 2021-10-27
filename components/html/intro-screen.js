import { Html } from "@react-three/drei"
import HtmlWrapper from "./html"

const IntroScreen = ({ start }) => {
  return (
    <HtmlWrapper className="html_intro" zIndexRange={[100, 0]}>
      <header>
        <h1>
          open code
          <br />
          poster generator
        </h1>
        <h3 className="credits">
          by Vlad Md golam
          <br />
          and Strelka Institute
        </h3>
        <a href="https://github.com/">read more</a>
      </header>
      <div className="launch">
        <h2>
          let&apos;s create together!
          <br />
          use your camera, text and voice!
        </h2>
        <button className="btn btn__intro" onClick={start}>
          start
        </button>
      </div>
      <footer></footer>
    </HtmlWrapper>
  )
}

export default IntroScreen
