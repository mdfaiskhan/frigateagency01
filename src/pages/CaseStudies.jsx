import { caseStudiesData } from "../data/caseStudies"
import { Link } from "react-router-dom"

const CaseStudies = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Case Studies</h1>
        <p style={{ maxWidth: "700px", marginTop: "15px" }}>
          Real brands. Real challenges. Real measurable growth.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "50px"
          }}
        >
          {caseStudiesData.map(cs => (
            <Link
              key={cs.slug}
              to={`/case-studies/${cs.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <h3>{cs.title}</h3>
                <p style={{ marginTop: "10px", opacity: 0.8 }}>
                  {cs.industry}
                </p>
                <p style={{ marginTop: "15px" }}>
                  {cs.highlight}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
