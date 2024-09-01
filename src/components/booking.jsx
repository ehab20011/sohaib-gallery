import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './booking.css';

function Booking() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      instagram: '',
      idea: ''
    });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Def the Temp Parameters
    var templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      instagram: formData.instagram,
      idea: formData.idea,
    };

    emailjs.send('ehab123', 'template_go5vyxs', templateParams, '7gI5yB4pAYD6wpMzc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log('FAILED...', error);
        alert("Failed to send the message. Please try again.");
      });


    // Reset the form fields after the submit button is clicked
    setFormData({
      name: '',
      email: '',
      phone: '',
      instagram: '',
      idea: ''
    });
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Booking</h1>
      <p className="booking-subtitle">Please use this form to book a shoot with me</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name..." required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address..." required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number..." />
        </div>
        <div className="form-group">
          <label htmlFor="instagram">Instagram</label>
          <input type="text" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="Your Instagram..." />
        </div>
        <div className="form-group">
          <label htmlFor="idea">Photoshoot Idea/theme *</label>
          <textarea id="idea" name="idea" value={formData.idea} onChange={handleChange} placeholder="Your Message..." required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Booking;
