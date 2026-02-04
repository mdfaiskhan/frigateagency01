import { homeData } from "../../data/home"

const Process = () => {
  return (
    <section className="section process">
      <div className="container">
        <h2>How We Work</h2>

        <div className="process-track">
          {homeData.process.map((item, index) => (
            <div key={index} className="process-step">
              <div className="process-card">
                <div className="process-dot">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
