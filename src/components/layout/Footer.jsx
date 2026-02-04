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
            </div>
  
            <div>
              <h4>Services</h4>
              <a href="/services">Social Media Marketing</a>
              <a href="/services">Meta Ads</a>
              <a href="/services">Google Ads</a>
              <a href="/services">SEO & Content</a>
              <a href="/services">Web Development</a>
            </div>
  
            <div>
              <h4>Industries</h4>
              <a href="/industries">E-commerce</a>
              <a href="/industries">Real Estate</a>
              <a href="/industries">Healthcare</a>
              <a href="/industries">Education</a>
              <a href="/industries">Startups</a>
            </div>
  
            <div>
              <h4>Contact</h4>
              <a href="/contact">Get Free Strategy Call</a>
              <a href="/contact">Request a Quote</a>
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
  