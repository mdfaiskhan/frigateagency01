import { Link } from "react-router-dom"
import { industriesData } from "../../data/industries"

const IndustriesGrid = () => {
  return (
    <section className="section industries-grid-section">
      <div className="container">
        <h2>Industries We Serve</h2>

        <div className="card-grid">
          {industriesData.map(industry => (
            <Link
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              className="industry-card-link"
            >
              <div className="card industry-card">
                <h3>{industry.title}</h3>
                <p style={{ marginTop: "10px" }}>
                  Customized digital strategies for this industry.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesGrid
