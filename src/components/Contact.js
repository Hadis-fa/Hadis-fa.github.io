// Contact.js
import React from 'react';

function Contact({ formData, handleInputChange, handleSubmit }) {
  return (
    <div id="contact" className="section">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
        <label>Message:</label>
        <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleInputChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
