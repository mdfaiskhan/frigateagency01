import { useParams } from "react-router-dom"
import { caseStudiesData } from "../data/caseStudies"

const CaseStudyDetail = () => {
  const { slug } = useParams()
  const study = caseStudiesData.find(cs => cs.slug === slug)

  if (!study) {
    return (
      <section className="section">
        <div className="container">
          <h2>Case study not found</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <h1>{study.title}</h1>
        <p style={{ opacity: 0.8, marginTop: "10px" }}>
          {study.industry} • {study.duration}
        </p>

        {/* Highlight */}
        <div className="card" style={{ marginTop: "40px" }}>
          <h3>Result Highlight</h3>
          <p>{study.highlight}</p>
        </div>

        {/* Challenge */}
        <div className="card" style={{ marginTop: "30px" }}>
          <h3>The Challenge</h3>
          <p>{study.challenge}</p>
        </div>

        {/* Strategy */}
        <div className="card" style={{ marginTop: "30px" }}>
          <h3>Our Strategy</h3>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            {study.strategy.map((item, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="card" style={{ marginTop: "30px" }}>
          <h3>Results Achieved</h3>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            {study.results.map((item, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* External Link */}
        {study.externalLink && (
          <div style={{ marginTop: "40px" }}>
            <a
              href={study.externalLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary">
                View Campaign Proof
              </button>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default CaseStudyDetail
