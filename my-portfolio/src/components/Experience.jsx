import { motion } from 'framer-motion'

function Experience() {
  return (
    <section className="project">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>01.</h2>
        <h3>Operations & Content</h3>
        <p>
          Edited videos, managed content, handled assets, and improved workflows.
        </p>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />

    </section>
  )
}

export default Experience