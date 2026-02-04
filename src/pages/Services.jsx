import { servicesData } from "../data/services"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Our Services</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "50px"
          }}
        >
          {servicesData.map(service => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <h3>{service.title}</h3>
                <p style={{ marginTop: "10px" }}>
                  Learn how we deliver measurable growth.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
