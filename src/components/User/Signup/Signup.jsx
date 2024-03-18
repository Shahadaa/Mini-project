// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import  './Signup.css';
// import { signup } from '../../../Services/userApi';


// // Validation schema using Yup
// const validationSchema = Yup.object().shape({
//   username: Yup.string()
//     .required('Username is required')
//     .matches(/^[a-zA-Z0-9_]{3,20}$/, 'Invalid username. Must be 3-20 characters and alphanumeric'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is required')
//     .matches(/\.com$/, 'invalid email'),
//   phone: Yup.string()
//     .matches(
//       /^\+(?:[0-9] ?){6,14}[0-9]$/,
//       'Invalid phone number. Must be a valid international phone number'
//     )
//     .required('Phone number is required'),
//   password: Yup.string()
//     .required('Password is required')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       'Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
//     ),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });



// const Signup = () => {
//     const initialValues = {
//       username: '',
//       email: '',
//       phone: '',
//       password: '',
//       confirmPassword: '',
//     };
  
//     const handleSubmit = async (values) => {
//       // Handle form submission logic here
//       console.log(values);
//       const {data} = await signup(values);
      
//     };
  
//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//         <div className='signup-form'>
//        <div className="signup-container">
//             <label htmlFor="username">Username:</label>
//             <Field type="text" id="username" name="username" />
//             <ErrorMessage name="username" component="div" className="error-message" />
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <Field type="email" id="email" name="email" />
//             <ErrorMessage name="email" component="div" className="error-message" />
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <Field type="tel" id="phone" name="phone" />
//             <ErrorMessage name="phone" component="div" className="error-message" />
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <Field type="password" id="password" name="password" />
//             <ErrorMessage name="password" component="div" className="error-message" />
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <Field type="password" id="confirmPassword" name="confirmPassword" />
//             <ErrorMessage name="confirmPassword" component="div" className="error-message" />
//           </div>
  
//           <div className="form-group">
//             <button type="submit">Submit</button>
//           </div>
//           </div>
          
//         </Form>
//       </Formik>
//     );
//   };
  
  
 
//   export default Signup
