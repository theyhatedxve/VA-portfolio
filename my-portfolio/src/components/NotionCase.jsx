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
          <p>Designed structured workflow systems using Notion to centralize tasks, databases, and operations in one place. Organized projects, processes, and tracking systems to improve efficiency and maintain consistent, scalable workflows.</p>
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