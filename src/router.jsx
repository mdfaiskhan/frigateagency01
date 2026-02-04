import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import Industries from "./pages/Industries"
import IndustryDetail from "./pages/IndustryDetail"
import CaseStudies from "./pages/CaseStudies"
import CaseStudyDetail from "./pages/CaseStudyDetail"
import Contact from "./pages/Contact"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:slug" element={<IndustryDetail />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes

