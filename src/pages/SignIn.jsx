import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
