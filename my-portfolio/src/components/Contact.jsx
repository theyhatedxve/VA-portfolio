function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <p className="contact-label">Contact</p>

        <h1 className="contact-title">
          Let’s build something together.
        </h1>

        <p className="contact-sub">
          Available for remote work and long-term collaboration.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:christian.dave.tagadiad01@gmail.com">
              christian.dave.tagadiad01@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>Phone</span>
            <p>+63 993 619 7219</p>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>Santa Margarita, Samar</p>
          </div>

        </div>

        <a
          href="https://www.linkedin.com/in/christian-dave-tagadiad/"
          target="_blank"
          className="contact-button"
        >
          View LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Contact