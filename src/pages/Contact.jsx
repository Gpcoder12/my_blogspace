// Contact.jsx
import React from 'react';
import contactImage from './images/profile-pic-image.jpg'; // Importing the image

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>If you have any questions, suggestions, or collaboration opportunities, feel free to reach out to me</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <img src={contactImage} alt="Contact Us" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
