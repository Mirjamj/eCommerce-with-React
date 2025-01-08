import React from 'react'

const Subscription = () => {
  return (
    <section id='subscription'>
      <div className="container d-flex align-items-center justify-content-center h-100">
      <form>
        <h4 className='text-center fs-5'>Subscribe today and enjoy 10% off on your first order!</h4>
        <div className="form-group">
          <div className="pt-4">
            <div className="input-group">
              <label htmlFor="sr-only"></label>
              <input type="email" id='subscription-field' className="form-control ps-4 py-2" aria-describedby="emailHelp" placeholder="Enter email" />
              <button type="submit" id='subscription-btn' className="btn btn-main">Submit</button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </section>
  )
}

export default Subscription