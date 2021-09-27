import "../styles/globals.css"
import Head from "next/head"
import { AppProvider } from "@/hooks/AppContext"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(null)
  const dataProvider = {
    isMobile,
  }

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange)

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    return setIsMobile(window.innerWidth < 700)
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
        />
      </Head>
      <AppProvider value={dataProvider}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
