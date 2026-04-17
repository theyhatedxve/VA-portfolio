import CaseGallery from "./CaseGallery"

function HotelCase() {
  const images = [
    "/hotel/hotel1.png",
    "/hotel/hotel2.png",
    "/hotel/hotel3.png",
    "/hotel/hotel4.png",
    "/hotel/hotel5.png",
    "/hotel/hotel6.png",
  ]

  return (
    <section id="travel" className="case dark">
      <div className="case-inner">

        <div className="case-left">
          <h1>2.4</h1>
          <h2>Travel Planning</h2>
          <p>Conducted structured hotel comparisons to support efficient travel decisions by evaluating cost, location, and key amenities. Delivered clear recommendations and optimized travel plans to align with schedules, budget, and business needs.</p>
        </div>

        <div className="case-right">
          <img src={images[0]} className="main-img" />
          <CaseGallery images={images.slice(1)} />
        </div>

      </div>
    </section>
  )
}

export default HotelCase