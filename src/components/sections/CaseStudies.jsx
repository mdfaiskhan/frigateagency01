import { caseStudiesData } from "../../data/caseStudies"
import mannat_reels from "../../assets/videos/mannat_reels.mp4"
import mannat_reels2 from "../../assets/videos/mannat_reels2.mp4"

const CaseStudies = () => {
  const cs = caseStudiesData[0]
  if (!cs) return null

  return (
    <section className="case-intro section">
      <div className="container case-intro-inner">

        {/* LEFT CONTENT */}
        <div className="case-intro-content">
          <span className="case-badge">
            WE HAVE A PROVEN SUCCESS RECORD
          </span>

          <h2 className="case-title">
            {cs.title.replaceAll("_", " ").toUpperCase()}
          </h2>

          <p className="case-description">
            {cs.challenge}
          </p>

          <div className="case-stats">
            <div>
              <h3>₹31L</h3>
              <p>Monthly Revenue</p>
            </div>
            <div>
              <h3>30 Days</h3>
              <p>Growth Period</p>
            </div>
            <div>
              <h3>2×</h3>
              <p>Sales Growth</p>
            </div>
          </div>
        </div>

        {/* RIGHT REELS */}
        <div className="case-intro-reels">
          <div className="reel-card">
            <video
              src={mannat_reels}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="reel-card">
            <video
              src={mannat_reels2}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default CaseStudies
