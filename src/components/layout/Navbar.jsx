import { useState } from "react"
import { Link } from "react-router-dom"
import InquiryForm from "../forms/InquiryForm"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePanel, setActivePanel] = useState(null)
  const [quoteOpen, setQuoteOpen] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setActivePanel(null)
    setQuoteOpen(false)
  }

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* LEFT */}
          <div className="nav-left">
            <button
              className="mobile-menu-btn"
              onClick={() => {
                setMenuOpen(!menuOpen)
                setActivePanel(null)
              }}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/" className="navbar-logo" onClick={closeAll}>
              FRIGATE <span>AGENCY</span>
            </Link>
          </div>

          {/* CENTER NAV */}
          <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={closeAll}>
              Home
            </Link>
            <Link to="/about" onClick={closeAll}>
              About
            </Link>

            <button
              className="accordion-head"
              onClick={() =>
                setActivePanel(activePanel === "services" ? null : "services")
              }
            >
              <span>Services</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <button
              className="accordion-head"
              onClick={() =>
                setActivePanel(activePanel === "industries" ? null : "industries")
              }
            >
              <span>Industries</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <Link to="/case-studies" onClick={closeAll}>
              Case Studies
            </Link>
            <Link to="/contact" onClick={closeAll}>
              Contact
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="nav-right">
            <button
              className="quote-btn"
              onClick={() => {
                setQuoteOpen(true)
                setMenuOpen(false)
              }}
            >
              <span className="quote-text">Get a Free Quote</span>
              <span className="quote-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 6l8 6 8-6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== SERVICES PANEL ===== */}
      {activePanel === "services" && (
        <div className="nav-panel">
          <div className="panel-header">
            <h3>Our Services</h3>
            <button className="panel-close" onClick={closeAll}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <div className="panel-grid">
            <Link to="/services/social-media-marketing" onClick={closeAll}>
              Social Media Marketing
            </Link>
            <Link to="/services/meta-ads" onClick={closeAll}>
              Meta Ads
            </Link>
            <Link to="/services/google-ads" onClick={closeAll}>
              Google Ads
            </Link>
            <Link to="/services/linkedin-ads" onClick={closeAll}>
              LinkedIn Ads
            </Link>
            <Link to="/services/seo-content" onClick={closeAll}>
              SEO & Content
            </Link>
            <Link to="/services/videography" onClick={closeAll}>
              Videography
            </Link>
            <Link to="/services/web-development" onClick={closeAll}>
              Website Development
            </Link>
          </div>
        </div>
      )}

      {/* ===== INDUSTRIES PANEL ===== */}
      {activePanel === "industries" && (
        <div className="nav-panel">
          <div className="panel-header">
            <h3>Industries We Serve</h3>
            <button className="panel-close" onClick={closeAll}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <div className="panel-grid">
            <Link to="/industries/ecommerce" onClick={closeAll}>
              E-commerce
            </Link>
            <Link to="/industries/real-estate" onClick={closeAll}>
              Real Estate
            </Link>
            <Link to="/industries/healthcare" onClick={closeAll}>
              Healthcare
            </Link>
            <Link to="/industries/education" onClick={closeAll}>
              Education
            </Link>
            <Link to="/industries/startups" onClick={closeAll}>
              Startups
            </Link>
            <Link to="/industries/b2b" onClick={closeAll}>
              B2B
            </Link>
          </div>
        </div>
      )}

      {/* ===== QUOTE MODAL ===== */}
      {quoteOpen && (
        <div className="modal-overlay" onClick={closeAll}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAll}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
            <h3 className="modal-title">Get a Free Quote</h3>
            <InquiryForm />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
