const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Frigate Agency</h4>
            <p>
              We scale brands through performance-driven digital marketing,
              creative content, and high-converting websites.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM18 7.2a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6.4c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.4-1.4.7-2.1.9a3.2 3.2 0 0 0-5.5 2.2c0 .3 0 .6.1.8-2.7-.1-5.1-1.4-6.7-3.4-.3.5-.5 1-.5 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.4-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2A6.5 6.5 0 0 1 4 18.6 9.1 9.1 0 0 0 8.9 20c5.9 0 9.1-4.9 9.1-9.1v-.4c.7-.5 1.2-1.1 1.6-1.7z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3zm0 2a7 7 0 0 1 0 14 7 7 0 0 1-3.4-.9l-.5-.3-2.7.7.7-2.6-.3-.5A7 7 0 0 1 12 5zm3.6 9.8c-.2.5-1.1.9-1.5 1-.3.1-.6.1-1 .1-.6-.1-1.3-.3-2.2-.7a8 8 0 0 1-2.9-2.6c-.6-.8-1-1.7-1.1-2.3 0-.3 0-.7.1-1 .1-.3.5-.9.9-1 .2-.1.4-.1.6-.1h.4c.1 0 .3 0 .4.3.1.2.5 1.3.6 1.4.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.3.4c-.1.2-.3.4 0 .8.3.4.8 1.3 1.8 2 .9.6 1.6.8 2 .9.3.1.6.1.8-.1l.5-.6c.2-.3.5-.3.7-.2.2.1 1.3.6 1.5.7.2.1.4.2.4.4 0 .2 0 .6-.2 1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h4>Services</h4>
            <a href="/services/social-media-marketing">Social Media Marketing</a>
            <a href="/services/meta-ads">Meta Ads</a>
            <a href="/services/google-ads">Google Ads</a>
            <a href="/services/linkedin-ads">LinkedIn Ads</a>
            <a href="/services/seo-content">SEO & Content</a>
            <a href="/services/videography">Videography</a>
            <a href="/services/web-development">Web Development</a>
          </div>

          <div>
            <h4>Industries</h4>
            <a href="/industries/ecommerce">E-commerce</a>
            <a href="/industries/real-estate">Real Estate</a>
            <a href="/industries/healthcare">Healthcare</a>
            <a href="/industries/education">Education</a>
            <a href="/industries/startups">Startups</a>
            <a href="/industries/b2b">Corporate / B2B</a>
            <a href="/industries/hospitality">Hospitality</a>
            <a href="/industries/personal-brand">Personal Brands</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Frigate Agency. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
