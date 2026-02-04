import React from "react"
import reel01 from "../../assets/videos/reel_01.mp4"
import reel02 from "../../assets/videos/reel_02.mp4"
import reel03 from "../../assets/videos/reel_03.mp4"
import reel04 from "../../assets/videos/reel_04.mp4"

const reels = [
  {
    src: reel01,
    url: "https://www.instagram.com/reel/DUVUR_4AtZ5/?igsh=MXMxMnN0MTZpNzk2cw=="
  },
  {
    src: reel02,
    url: "https://www.instagram.com/reel/DKPSmt7z3zH/?igsh=MXIyM3ZhOXh0Mm14cQ=="
  },
  {
    src: reel03,
    url: "https://www.instagram.com/reel/DIyLKzZtoeb/?igsh=dGRhbnJjMG11bzkw"
  },
  {
    src: reel04,
    url: "https://www.instagram.com/reel/DSMc7SLE9W8/?igsh=MXJvN3hqengzNWY4bg=="
  }
]

const ReelsGrid = () => {
  const [slidesVisible, setSlidesVisible] = React.useState(4)
  const [pageIndex, setPageIndex] = React.useState(0)

  React.useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      if (width < 768) {
        setSlidesVisible(2)
      } else if (width < 1024) {
        setSlidesVisible(3)
      } else {
        setSlidesVisible(4)
      }
    }

    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [])

  const totalPages = Math.ceil(reels.length / slidesVisible)

  React.useEffect(() => {
    const id = setInterval(() => {
      setPageIndex(prev => (prev + 1) % totalPages)
    }, 45000)
    return () => clearInterval(id)
  }, [totalPages])

  React.useEffect(() => {
    if (pageIndex >= totalPages) {
      setPageIndex(0)
    }
  }, [pageIndex, totalPages])

  return (
    <section className="section reels">
      <div className="container">
        <h2>Reels That Perform</h2>

        <div className="reels-slider">
          <div
            className="reels-track"
            style={{
              transform: `translateX(-${pageIndex * 100}%)`
            }}
          >
            {reels.map((reel, i) => (
              <div
                key={i}
                className="reels-slide"
                style={{ width: `${100 / slidesVisible}%` }}
              >
                <div className="reels-card">
                  <div className="reels-video-wrap">
                    <video
                      src={reel.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-primary reels-btn"
                    onClick={() => window.open(reel.url, "_blank")}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot ${i === pageIndex ? "active" : ""}`}
              onClick={() => setPageIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReelsGrid
