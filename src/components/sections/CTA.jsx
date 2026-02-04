import { homeData } from "../../data/home"
import InquiryForm from "../forms/InquiryForm"

const CTA = () => {
  const { title, subtitle } = homeData.finalCTA

  return (
    <section className="section contact-page">
      <div className="container contact-layout">
        <div className="contact-left">
          <h2>{title}</h2>
          <p className="contact-subhead">Make an Inquiry</p>
          <p className="contact-copy">{subtitle}</p>
        </div>

        <div className="contact-right">
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}

export default CTA
