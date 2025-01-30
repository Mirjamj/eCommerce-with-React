import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import Location from '../components/contact/Location'

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