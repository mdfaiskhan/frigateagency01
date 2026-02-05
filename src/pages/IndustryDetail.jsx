import { useParams } from "react-router-dom"
import { industriesData } from "../data/industries"

const IndustryDetail = () => {
  const { slug } = useParams()
  const industry = industriesData.find(i => i.slug === slug)

  if (!industry) {
    return (
      <section className="section">
        <div className="container">
          <h2>Industry not found</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <h1>{industry.title}</h1>

        <div className="card" style={{ marginTop: "30px" }}>
          <h3>{industry.overviewTitle || "Overview"}</h3>
          <p>{industry.intro}</p>
        </div>

        <div className="card" style={{ marginTop: "30px" }}>
          <h3>{industry.solutionsTitle || "Our Solutions"}</h3>
          <p>{industry.solutions}</p>
        </div>

        <div className="card" style={{ marginTop: "30px" }}>
          <h3>{industry.resultsTitle || "Results You Can Expect"}</h3>
          <p>{industry.results}</p>
        </div>
      </div>
    </section>
  )
}

export default IndustryDetail
