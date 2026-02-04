import { homeData } from "../../data/home"

const Problems = () => {
  return (
    <section className="section problems">
      <div className="container">
        <h2>What Can Frigate Agency Help You With?</h2>

        <div className="problems-grid">
          {homeData.problems.map((item, index) => (
            <div key={index} className="card problem-card">
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems
