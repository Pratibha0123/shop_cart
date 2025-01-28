import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.message) newErrors.message = 'Message is required';
      return newErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        // Handle form submission, e.g., send data to an API
        console.log('Form data submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrors(validationErrors);
      }
    };
  
    return (
      <div className='contact-page'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
          />
          {errors.name && <p className='error'>{errors.name}</p>}
  
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
          />
          {errors.email && <p className='error'>{errors.email}</p>}
  
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
          />
          {errors.message && <p className='error'>{errors.message}</p>}
  
          <button type='submit'>Send Message</button>
        </form>
      </div>
    );
  };

export default Contact