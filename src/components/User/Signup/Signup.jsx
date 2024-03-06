// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       alert('Invalid email format');
//       return;
//     }

//     // Submit the form (you can send the data to your server or perform other actions)
//     setSuccessMessage('Signup successful!');

//     // Clear form data after submission (optional)
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <div className='signup'>
//             <div className ="signup-container">
//                 <h1>SIGNUP</h1>
//                 <div className='signup-fields'></div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username"></label>
//         <input
//           type="text"
//           name="username"
//           placeholder='Your username'
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email"></label>
//         <input
//           type="email"
//           name="email"
//           placeholder='Enter your email'
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="password"></label>
//         <input
//           type="password"
//           name="password"
//           placeholder='Password'
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Sign Up</button>
//       </form>

//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//     </div>
//   );
// };

// export default Signup;
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import './Signup.css';

// const Signup = () => {
//   const initialValues = {
//     username: '',
//     email: '',
//     password: '',
//   };

//   const validationSchema = Yup.object({
//     username: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
//   });

//   const onSubmit = (values, { setSubmitting, resetForm }) => {
//     // Submit the form (you can send the data to your server or perform other actions)
//     alert(JSON.stringify(values, null, 2));

//     // Clear form data after submission (optional)
//     resetForm();
//     setSubmitting(false);
//   };

//   return (
//     <div className='signup'>
//       <div className="signup-container">
//         <h1>SIGNUP</h1>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {formik => (
//             <Form>
//               <div className='signup-fields'>
//                 <label htmlFor="username">Username</label>
//                 <Field type="text" name="username" placeholder="Your username" />
//                 <ErrorMessage name="username" component="div" className="error-message" />

//                 <label htmlFor="email">Email</label>
//                 <Field type="email" name="email" placeholder="Enter your email" />
//                 <ErrorMessage name="email" component="div" className="error-message" />

//                 <label htmlFor="password">Password</label>
//                 <Field type="password" name="password" placeholder="Password" />
//                 <ErrorMessage name="password" component="div" className="error-message" />

//                 <button type="submit" disabled={formik.isSubmitting}>Sign Up</button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import  './Signup.css';


// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .matches(/^[a-zA-Z0-9_]{3,20}$/, 'Invalid username. Must be 3-20 characters and alphanumeric'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/\.com$/, 'invalid email'),
  phone: Yup.string()
    .matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      'Invalid phone number. Must be a valid international phone number'
    )
    .required('Phone number is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});



const Signup = () => {
    const initialValues = {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  
    const handleSubmit = (values, { setSubmitting }) => {
      // Handle form submission logic here
      console.log(values);
      setSubmitting(false);
    };
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <div className='signup-form'>
       <div className="signup-container">
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <Field type="tel" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
          </div>
          
        </Form>
      </Formik>
    );
  };
  
  
 
  export default Signup
