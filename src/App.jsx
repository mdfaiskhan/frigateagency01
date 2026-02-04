import React from "react"
import { BrowserRouter, useLocation } from "react-router-dom"
import AppRoutes from "./router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
