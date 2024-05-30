// Hero.jsx
import React from 'react';
import heroImage from '../images/Hero.jpg'; // 

const Hero = () => {
  return (
    <section className="hero">
      <div className="jumbotron jumbotron-fluid bg-dark text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 mb-4">Welcome to MyBlogSpace Platform</h1>
              <p className="lead">Discover amazing stories, share your own stories, and engage with the community.</p>
            </div>
            <div className="col-md-6 text-center">
              <img src={heroImage} alt="Hero Image" className="img-fluid rounded-circle shadow-lg mb-4" style={{ maxWidth: '80%', animation: 'fade-in 1s ease-in-out' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
