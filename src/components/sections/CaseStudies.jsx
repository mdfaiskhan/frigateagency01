import { caseStudiesData } from "../../data/caseStudies"

const mannatReels =
  "https://res.cloudinary.com/duj90wrub/video/upload/v1770236343/mannat_reels_vdmzpa.mp4"
const mannatReels2 =
  "https://res.cloudinary.com/duj90wrub/video/upload/v1770236577/mannat_reels2_hobklg.mp4"

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
              src={mannatReels}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="reel-card">
            <video
              src={mannatReels2}
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
