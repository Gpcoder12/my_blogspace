import React from 'react';
import aboutImage from '../images/about-image.jpg'; // Importing the image

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="about-content">
            <h2>About MyBlogSpace</h2>
            <p className="lead">I am a passionate blogger dedicated to sharing valuable insights and stories with my readers. My mission is to inspire, educate, and entertain through our content, covering a wide range of topics including technology, lifestyle, travel, and more.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-image-container">
            <img src={aboutImage} alt="About Us" className="img-fluid rounded" /> {/* Using the imported image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
