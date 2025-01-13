import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <div className="d-md-flex container align-items-center justify-content-center">
        <ContactForm />
        <Location />
      </div>
    </div >
  )
}

export default Contact