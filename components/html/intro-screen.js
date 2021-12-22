const IntroScreen = ({ start }) => (
  <div className="html_intro">
    <header>
      <h2>
        open code
        <br />
        poster generator
      </h2>
      <h3 className="credits">
        made by Vlad Md Golam
        <br />
        and Strelka Institute
        <br />
        {/* <a href="https://github.com/">read more</a> */}
      </h3>
    </header>
    <div className="launch">
      <h1>Let’s play!</h1>
      <button className="btn btn__intro" onClick={start}>
        START
      </button>
    </div>
    <footer></footer>
  </div>
)

export default IntroScreen
