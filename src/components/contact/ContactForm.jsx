import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

  //State to store form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  //State to store validation errors in an object and submission status
  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState('');

  //Function for form input changes, updates formDate dynamically based on the input fields ID and value
  const handleChange = (e) => {
    setFormData(data => {
      return {
        ...data, //Spread to keep existing formData values
        [e.target.id]: e.target.value //Update only the field that has been edited
      }
    })
  }

  //Function to handle form submission, prevents the default form submission behavior and sends the data to the API
  const handleSubmit = async (e) => {
    e.preventDefault()

    //Validate form before sending data
    if (!validate()) return

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      })

      console.log('Response status:', response.status); //Log response status

      //If succesful, clear the form and render a confirmation message
      if (response.ok) {
        const data = await response.json();
        console.log('Form has been submitted', data);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        })

        setFormStatus('Thank you for your message!')
      } else {
        //Handle error when the response status is not 200
        setFormStatus('An error occured, please try again later.')
      }
    } catch (error) {
      //Handle network or unexpected errors
      console.log('Error', error);
      setFormStatus('An error occured, please try again later.')
    }

  }

  // Function to validate form inputs
  const validate = () => {

    const errors = {} // Object to hold validation errors

    if (formData.firstName === '') {
      errors.firstName = 'Please enter a first name'
    }
    else if (formData.firstName.trim().length < 2) {
      errors.firstName = 'Your name must be at least 2 characters long'
    }
    if (formData.lastName === '') {
      errors.lastName = 'Please enter a last name'
    }
    else if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Your name must be at least 2 characters long'
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      errors.email = 'Please enter valid email adress'
    }

    if (formData.message === '') {
      errors.message = 'Please write a message'
    }

    //Update the formErrors state with the validation errors
    setFormErrors(errors)

    // Return true if there are no errors
    return Object.keys(errors).length === 0
  }

  return (
    <div className="col-md-6 col-lg-5 my-4">
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className="form-group mb-4">
          <label htmlFor="firstName">First name</label>
          <input className='form-control' value={formData.firstName} onChange={handleChange} type="text" id='firstName' />
          {formErrors.firstName && <p className='validation-error'>{formErrors.firstName}</p>}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="lastName">Last name</label>
          <input className='form-control' value={formData.lastName} onChange={handleChange} type="text" id='lastName' />
          {formErrors.lastName && <p className='validation-error'>{formErrors.lastName}</p>}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email">Email</label>
          <input className='form-control' value={formData.email} onChange={handleChange} type="text" id='email' />
          {formErrors.email && <p className='validation-error'>{formErrors.email}</p>}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message">Your message</label>
          <textarea className="form-control" value={formData.message} onChange={handleChange} type="text" id="message" rows="3"></textarea>
          {formErrors.message && <p className='validation-error'>{formErrors.message}</p>}
        </div>
        <button className='btn btn-main' type='submit'>Send message</button>
        {formStatus && <p className='form-confirmation mt-3'>{formStatus}</p>}
      </form>
    </div>
  )
}

export default ContactForm