import CaseGallery from "./CaseGallery"

function CalendarCase() {
  const images = [
    "/calendar/cal1.png",
    "/calendar/cal2.png",
    "/calendar/cal3.png",
    "/calendar/cal4.png",
    "/calendar/cal5.png",
    "/calendar/cal6.png",
    "/calendar/cal7.png",
    "/calendar/cal8.png",
    "/calendar/cal9.png",
  ]

  return (
    <section id="calendar" className="case light">
      <div className="case-inner">

        <div className="case-left">
          <h1>2.2</h1>
          <h2>Calendar Management</h2>
          <p>Built a structured scheduling system to manage meetings, deadlines, and availability with clarity and control. Handled scheduling and rescheduling with precision while aligning tasks and priorities to avoid conflicts and delays, ensuring a smooth and organized workflow.</p>
        </div>

        <div className="case-right">
          <img src={images[0]} className="main-img" />
          <CaseGallery images={images.slice(1)} />
        </div>

      </div>
    </section>
  )
}

export default CalendarCase