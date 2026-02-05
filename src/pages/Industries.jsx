import { industriesData } from "../data/industries"
import { Link } from "react-router-dom"

const Industries = () => {
  return (
    <section className="section industries-expertise">
      <div className="container industries-expertise-inner">
        <div className="industries-expertise-left">
          <p className="industries-eyebrow">EXPERTISE</p>
          <h1>INDUSTRIES WE SERVE</h1>
          <p className="industries-copy">
            We help brands across multiple industries with performance-driven
            marketing, creative content, and measurable growth. Explore the
            industries we specialize in and see how we tailor strategies for
            real business impact.
          </p>
          <Link to="/contact" className="btn-primary industries-cta">
            SPEAK TO OUR EXPERTS
          </Link>
        </div>

        <div className="industries-expertise-right">
          <div className="industries-chip-grid">
            {industriesData.map(item => (
              <Link
                key={item.slug}
                to={`/industries/${item.slug}`}
                className="industries-chip"
              >
                <span className={`chip-icon ${item.icon}`} aria-hidden="true" />
                <span className="chip-text">{item.chipLabel}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
