import InquiryForm from "../components/forms/InquiryForm"

const Contact = () => {
  return (
    <section className="section contact-page">
      <div className="container contact-layout">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <p className="contact-subhead">Make an Inquiry</p>
          <p className="contact-copy">
            Share your goals and service needs, and our team will respond with
            a tailored plan, timelines, and expert guidance to help you move
            faster with confidence.
          </p>
        </div>

        <div className="contact-right">
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
