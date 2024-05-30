import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Validation logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" placeholder="Username" required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" required />
        </div>
        <div className="mb-3">
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" placeholder="Confirm Password" required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
