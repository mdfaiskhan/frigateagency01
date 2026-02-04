import React from "react"

const faqs = [
  {
    q: "What services does your digital marketing agency offer?",
    a:
      "We offer end-to-end digital marketing services including Social Media Marketing, Meta Ads (Facebook & Instagram), Google Ads (PPC), LinkedIn Ads, SEO & Content Creation, Videography & Creative Production, and Website Design & Development. Our solutions are customized to meet specific business goals and industry requirements."
  },
  {
    q: "How do you create a digital marketing strategy for a business?",
    a:
      "We start by understanding your brand, objectives, target audience, and competitors. Based on detailed research and data analysis, we develop a tailored strategy focused on growth, engagement, and measurable results."
  },
  {
    q: "How long does it take to see results?",
    a:
      "Results depend on the service and industry. Paid advertising can generate leads within days, while SEO and organic growth typically take 3–6 months for sustainable results. We focus on both short-term wins and long-term growth."
  },
  {
    q: "Do you work with small businesses or only large brands?",
    a:
      "We work with startups, small businesses, and established brands. Our strategies are scalable and customized based on budget, goals, and growth stage."
  },
  {
    q: "How do you measure campaign performance?",
    a:
      "We track performance using key metrics such as leads, conversions, ROI, engagement, traffic, and cost per result. Detailed reports are shared regularly to ensure transparency."
  },
  {
    q: "Do you provide creative content and videos?",
    a:
      "Yes, we offer complete creative services including ad creatives, reels, brand videos, and promotional content designed for performance and engagement."
  },
  {
    q: "Will I have control over my ad accounts?",
    a:
      "Absolutely. All ad accounts are set up in your name, and you have full ownership and access at all times."
  },
  {
    q: "What makes your agency different from others?",
    a:
      "We combine creativity with data-driven strategies, offer transparent reporting, and focus on long-term partnerships rather than short-term results."
  },
  {
    q: "How much do your services cost?",
    a:
      "Pricing depends on the scope of work, platforms, and business goals. We offer flexible packages tailored to your needs and budget."
  },
  {
    q: "How do we get started?",
    a:
      "Simply contact us through our website or call our team. We’ll schedule a consultation to understand your requirements and propose a customized strategy."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null)

  const toggle = index => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="section faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
