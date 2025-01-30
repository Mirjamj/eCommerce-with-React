import React from 'react'

const Location = () => {
  return (
    <div className='d-flex flex-column align-items-center col-md-6 col-lg-5'>
      <div className="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.8869403493776!2d18.064914229054715!3d59.33260655777952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1sen!2sse!4v1736781241267!5m2!1sen!2sse"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className='d-flex my-4 gap-5'>
        <address className="m-0">
          <p className='m-0'>Stockholm street</p>
          <p className='m-0'>123 45</p>
          <p className='m-0'>Stockholm</p>
        </address>
        <div className="opening-h">
          <p className='mb-1'>Opening hours:</p>
          <ul className="list-unstyled m-0">
            <li>Mon - Fri: <span className="fw-bold">10:00 - 20:00</span></li>
            <li>Sat - Sun: <span className="fw-bold">10:00 - 18:00</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Location