import CaseGallery from "./CaseGallery"

function EmailCase() {
  const images = [
    "/emails/email1.png",
    "/emails/email2.png",
    "/emails/email3.png",
    "/emails/email4.png",
    "/emails/email5.png",
    "/emails/email6.png",
    "/emails/email7.png",
    "/emails/email8.png",
    "/emails/email9.png",
    "/emails/email10.png",
  ]

  return (
    <section id="email" className="case dark">
      <div className="case-inner">

        <div className="case-left">
          <h1>2.1</h1>
          <h2>Email Management</h2>
          <p>Built a structured email system focused on speed, clarity, and reliability.</p>
          <p>Reduced response time through prioritization and smart labeling.</p>
          <p>Handled client communication, follow-ups, and task tracking with precision.</p>
          <p>Ensured every message is answered, organized, and actionable.</p>
        </div>

        <div className="case-right">
          <img src={images[0]} className="main-img" />
          <CaseGallery images={images.slice(1)} />
        </div>

      </div>
    </section>
  )
}

export default EmailCase