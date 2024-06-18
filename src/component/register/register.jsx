import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import '../register/registerPage.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null); // New state for server error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validatePassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:6969/food/api/register', formData);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server Error:', error.response.data);
        setServerError(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Network Error:', error.request);
        setServerError('Network error. Please try again.');
      } else {
        // Something else caused an error
        console.error('Error:', error.message);
        setServerError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div id="sec">
      <div className="container text-dark mt-5">
        <h5>Create an Account</h5>
        <p>Let us help you set up your account</p>
        <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor="name" className='text-start m-2 fw-bold'>Name</label>
          <input 
            type="text" 
            className={`form-control p-3 ${errors.name ? 'is-invalid' : ''}`} 
            id="name" 
            name="name"
            placeholder='Enter Name' 
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}

          <label htmlFor="email" className='m-2 fw-bold'>Email</label>
          <input 
            type="email" 
            className={`form-control p-3 ${errors.email ? 'is-invalid' : ''}`} 
            id="email" 
            name="email"
            placeholder='Enter Email' 
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}

          <label htmlFor="password" className='m-2 fw-bold'>Password</label>
          <input 
            type="password" 
            className={`form-control p-3 ${errors.password ? 'is-invalid' : ''}`} 
            id="password" 
            name="password"
            placeholder='Enter Password' 
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}

          <label htmlFor="confirmPassword" className='m-2 fw-bold'>Confirm Password</label>
          <input 
            type="password" 
            className={`form-control p-3 ${errors.confirmPassword ? 'is-invalid' : ''}`} 
            id="confirmPassword" 
            name="confirmPassword"
            placeholder='Confirm Password' 
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}

          <div className="form-check mt-3">
            <input 
              type="checkbox" 
              className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`} 
              id="termsAccepted" 
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="termsAccepted">Accept Terms & Conditions</label>
            {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
          </div>

          {serverError && <div className="alert alert-danger mt-3">{serverError}</div>} {/* Display server error */}

          <button type="submit" className="btn btn-success mt-4 fs-5 ps-5 pe-5 pt-2 pb-2 btn1">
            Create Account <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
