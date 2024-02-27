import React, { useState } from 'react';
import './Login.css'



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the data to the server
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div>
     <div className='header'>
        <div className='login'>
        <div className ="login-container">
            <h1>LOGIN</h1>
            <div className='login-fields'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Login;