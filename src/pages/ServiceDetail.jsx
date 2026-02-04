import { useParams } from "react-router-dom"
import { servicesData } from "../data/services"

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    return (
      <section className="section">
        <div className="container">
          <h2>Service not found</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <h1>{service.title}</h1>

        {service.sections.map((sec, i) => (
          <div key={i} className="card" style={{ marginTop: "30px" }}>
            <h3>{sec.heading}</h3>
            <p>{sec.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceDetail
