import { aboutData } from "../data/about"

const About = () => {
  return (
    <>
      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <h1>{aboutData.intro.title}</h1>
          <p style={{ maxWidth: "900px", marginTop: "20px" }}>
            {aboutData.intro.content}
          </p>
          <p style={{ maxWidth: "900px", marginTop: "20px" }}>
            {aboutData.description}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px"
            }}
          >
            <div className="card">
              <h2>{aboutData.vision.title}</h2>
              <p>{aboutData.vision.content}</p>
            </div>

            <div className="card">
              <h2>{aboutData.mission.title}</h2>
              <p>{aboutData.mission.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2>Why Choose Frigate Agency</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              marginTop: "40px"
            }}
          >
            {aboutData.whyChooseUs.map((item, i) => (
              <div key={i} className="card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
