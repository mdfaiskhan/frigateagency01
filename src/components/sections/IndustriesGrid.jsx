import { Link } from "react-router-dom"
import { industriesData } from "../../data/industries"

const IndustriesGrid = () => {
  return (
    <section className="section industries-expertise">
      <div className="container industries-expertise-inner">
        <div className="industries-expertise-left">
          <p className="industries-eyebrow">EXPERTISE</p>
          <h2>INDUSTRIES WE SERVE</h2>
          <p className="industries-copy">
            We serve a gigantic range of industries, from Dubai's best bars and
            restaurants to respected educational institutions, and healthcare
            providers to major electrical brands. The thing with SEO is this: it
            doesn't discriminate, and instead can be adapted for every
            conceivable industry. But while our SEO techniques can be used for
            any niche, we like to go the extra mile, spending time to truly
            understand your business and its values. It's this personalised
            service that marks us out from the competition.
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

export default IndustriesGrid
