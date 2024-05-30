import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {/* Changed to navbar-dark */}
      <div className="container-fluid">
        {/* Logo Image */}
        <img src={require('../images/logo2-image.jpg').default} alt="Logo" className="navbar-logo" /> {/* Corrected image import */}

        {/* Brand Link */}
        <Link className="navbar-brand" to="/">My Blog</Link>

        {/* Navbar Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Align to right with 'ms-auto' */}
            {/* Home Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Add Blog Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/blogform">Add Blog</Link>  
            </li>

            {/* About Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> 
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link> 
            </li>

            {/* Sign Up Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link> 
            </li>

            {/* Sign In Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
