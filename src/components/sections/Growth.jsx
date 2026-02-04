import { useEffect, useState } from "react"

const growthData = [
  {
    title: "Increase brand awareness on social media",
    desc:
      "We create platform-native content strategies that increase reach, impressions, and brand recall through consistent storytelling and strong visual identity.",
    icon: "pulse"
  },
  {
    title: "Generate high-quality leads through paid ads",
    desc:
      "We design intent-driven paid ad funnels that attract sales-ready leads instead of vanity traffic.",
    icon: "target"
  },
  {
    title: "Scale revenue with Meta & Google Ads",
    desc:
      "Performance-focused ad systems engineered to scale profitably while maintaining strong ROAS.",
    icon: "chart"
  },
  {
    title: "Build authority with SEO-optimized content",
    desc:
      "SEO content that ranks, educates, and positions your brand as a trusted authority in your industry.",
    icon: "search"
  },
  {
    title: "Capture attention with professional videography",
    desc:
      "High-retention video content designed to stop the scroll within seconds.",
    icon: "video"
  },
  {
    title: "Convert visitors with high-performing websites",
    desc:
      "Conversion-focused websites built for speed, clarity, and measurable outcomes.",
    icon: "layout"
  }
]

const ITEM_HEIGHT = 76 // must match SCSS .growth-headline height

const Growth = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".growth")
      if (!section) return

      const start = section.offsetTop
      const scrollY = window.scrollY
      const height = section.offsetHeight

      const progress = Math.min(
        Math.max(scrollY - start, 0),
        height
      )

      const index = Math.floor(
        (progress / height) * growthData.length
      )

      setActiveIndex(
        Math.min(index, growthData.length - 1)
      )
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="growth"
      style={{ height: `${growthData.length * 80}vh` }}
    >
      {/* PINNED CONTENT */}
      <div className="growth-pin">
        <div className="container">
          <h2 className="growth-main-heading">
            What Can Frigate Agency Help You With?
          </h2>
        </div>

        <div className="container growth-grid">
          {/* LEFT — HEADLINE RAIL */}
          <div className="growth-left">
            <div
              className="growth-rail"
              style={{
                transform: `translateY(${-(activeIndex - 1) * ITEM_HEIGHT}px)`
              }}
            >
              {growthData.map((item, index) => (
                <div
                  key={index}
                  className={`growth-headline ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — ACTIVE CONTENT */}
          <div className="growth-right">
            <div className="growth-card" key={activeIndex}>
              <div
                className={`growth-icon ${growthData[activeIndex].icon}`}
              />
              <p>{growthData[activeIndex].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth
