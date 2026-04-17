import CaseGallery from "./CaseGallery"

function NotionCase() {
  const images = [
    "/notion/notion1.png",
    "/notion/notion2.png",
    "/notion/notion3.png",
    "/notion/notion4.png",
    "/notion/notion5.png",
    "/notion/notion6.png",
    "/notion/notion7.png",
    "/notion/notion8.png",
    "/notion/notion9.png",
  ]

  return (
    <section id="notion" className="case light">
      <div className="case-inner">

        <div className="case-left">
          <h1>2.3</h1>
          <h2>Workflow Systems</h2>
          <p>Built structured workflow systems using Notion for daily operations.</p>
          <p>Organized tasks, databases, and processes into clear, scalable systems.</p>
          <p>Tracked projects, finances, and workflows in one centralized workspace.</p>
          <p>Improved efficiency by reducing manual work and scattered information.</p>
        </div>

        <div className="case-right">
          <img src={images[0]} className="main-img" />
          <CaseGallery images={images.slice(1)} />
        </div>

      </div>
    </section>
  )
}

export default NotionCase