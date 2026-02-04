import Hero from "../components/sections/Hero"
import CaseStudies from "../components/sections/CaseStudies"
import Growth from "../components/sections/Growth"
import ServicesGrid from "../components/sections/ServicesGrid"
import AboutIntro from "../components/sections/AboutIntro"
import Approach from "../components/sections/Process"
import IndustriesGrid from "../components/sections/IndustriesGrid"
import Testimonials from "../components/sections/Testimonials"
import ReelsGrid from "../components/sections/ReelsGrid"
import FAQ from "../components/sections/FAQ"
import CTA from "../components/sections/CTA"

const Home = () => {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Growth />
      <ServicesGrid />
      <AboutIntro />
      <Approach />
      <IndustriesGrid />
      <Testimonials />
      <ReelsGrid />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home

