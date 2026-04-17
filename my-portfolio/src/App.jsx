import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import EmailCase from "./components/EmailCase"
import CalendarCase from "./components/CalendarCase"
import NotionCase from "./components/NotionCase"
import HotelCase from "./components/HotelCase"
import Contact from "./components/Contact"

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <Navbar />

      <Hero />

      <EmailCase />
      <CalendarCase />
      <NotionCase />
      <HotelCase />

      <Contact />
    </>
  )
}

export default App