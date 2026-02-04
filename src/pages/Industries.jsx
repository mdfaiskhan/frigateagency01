import { industriesData } from "../data/industries"
import { Link } from "react-router-dom"

const Industries = () => {
  return (
    <section className="section industries-page">
      <div className="container">
        <h1>Industries We Serve</h1>

        <div className="industries-grid-list">
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

export default Industries
