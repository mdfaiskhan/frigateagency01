import heroVideo from "../../assets/videos/hero_background.mp4"

const Hero = () => {
  return (
    <section className="hero">
  <video
    className="hero-video"
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
  />

  <div className="hero-overlay" />

  <div className="container hero-content">
    <h1>Scale Your Brand with Performance Marketing</h1>
    <p>
      We help brands grow through data-driven digital marketing,
      high-impact creatives, and measurable results.
    </p>

    <button className="btn-primary">Get Free Strategy Call</button>
  </div>
</section>

  )
}

export default Hero
