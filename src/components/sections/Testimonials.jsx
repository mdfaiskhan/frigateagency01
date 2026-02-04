import React from "react"
import { homeData } from "../../data/home"

const Testimonials = () => {
  const [slidesVisible, setSlidesVisible] = React.useState(3)
  const [pageIndex, setPageIndex] = React.useState(0)

  React.useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth
      if (width < 768) setSlidesVisible(2)
      else if (width < 1024) setSlidesVisible(2)
      else setSlidesVisible(3)
    }

    updateSlides()
    window.addEventListener("resize", updateSlides)
    return () => window.removeEventListener("resize", updateSlides)
  }, [])

  const totalPages = Math.ceil(homeData.testimonials.length / slidesVisible)

  React.useEffect(() => {
    if (pageIndex >= totalPages) {
      setPageIndex(0)
    }
  }, [pageIndex, totalPages])

  React.useEffect(() => {
    const id = setInterval(() => {
      setPageIndex(prev => (prev + 1) % totalPages)
    }, 10000)
    return () => clearInterval(id)
  }, [totalPages])

  return (
    <section className="section testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${pageIndex * 100}%)`
            }}
          >
            {homeData.testimonials.map((t, i) => (
              <div
                className="testimonial-slide"
                key={i}
                style={{ width: `${100 / slidesVisible}%` }}
              >
                <div className="card testimonial-card">
                  <p>"{t.review}"</p>
                  <h4>{t.name}</h4>
                  <p className="testimonial-business">{t.business}</p>
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

export default Testimonials
