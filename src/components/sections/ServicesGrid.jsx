import { Link } from "react-router-dom"
import { homeData } from "../../data/home"

const ServicesGrid = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Our Digital Marketing Services</h2>

        <div className="services-grid">
          {homeData.services.map((service, i) => {
            const slug = service
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/\s+/g, "-")

            return (
              <Link
                key={i}
                to={`/services/${slug}`}
                className="card service-card"
              >
                <h3>{service}</h3>
                <p>
                  Performance-driven strategies designed to scale your brand.
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
