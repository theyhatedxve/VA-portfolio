function CaseGallery({ images = [] }) {
  return (
    <div className="sub-grid">
      {images.map((img, i) => (
        <img key={i} src={img} alt="" />
      ))}
    </div>
  )
}

export default CaseGallery