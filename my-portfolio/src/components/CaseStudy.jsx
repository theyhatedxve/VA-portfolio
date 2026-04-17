function CaseStudy({ number, title, description, image }) {
  return (
    <section className="case">
      
      <div className="case-left">
        <h1>{number}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <img src={image} className="case-img" />

    </section>
  )
}

export default CaseStudy