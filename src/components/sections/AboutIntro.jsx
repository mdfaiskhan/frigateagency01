import { useNavigate } from "react-router-dom"

const AboutIntro = () => {
  const navigate = useNavigate()

  return (
    <section className="section">
      <div className="container about-intro">
        <h2>About Frigate Agency</h2>
        <p>
          Weâ€™re a performance-driven digital marketing agency focused on
          measurable growth and long-term brand value.
        </p>
        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate("/about")}
        >
          More Info
        </button>
      </div>
    </section>
  )
}

export default AboutIntro
