import "../styles/globals.css"
import Head from "next/head"
import { AppProvider } from "@/hooks/AppContext"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(null)
  const [menuItems, setMenuItems] = useState({})
  const [menuIndex, setMenuIndex] = useState(0)
  const [video, setVideo] = useState(null)
  const [videoMode, setVideoMode] = useState("bg")

  const requestSetMenuItems = (menuItems) => {
    setMenuIndex(Math.random())
    setMenuItems(menuItems)
  }

  const dataProvider = {
    isMobile,
    menuItems,
    requestSetMenuItems,
    menuIndex,
    video,
    setVideo,
    videoMode,
    setVideoMode,
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleResize = () => setIsMobile(window.innerWidth < 700)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
        />
        <title>Open Code Poster Generator</title>
      </Head>
      <AppProvider value={dataProvider}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
