/* eslint-disable no-unused-vars */
import React from 'react';
import './Signup.css';
// import Signin from './components/Signin/Signin';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  let navigate =useNavigate()
  // Custom validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('This name is required').min(3, 'Minimum is 3 characters').max(12, 'Maximum is 12 characters'),
    email: Yup.string().required('This email is required').email('Enter a valid email'),
    phone: Yup.string().required('Phone is required').matches(/^01[1235][0-9]{8}$/, 'Phone number is not valid'),
    password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password must start with an uppercase letter and be 6-8 characters long'),
    rePassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords must match'),
  });

    function signup(values)  {
     
    console.log(values);

    navigate('/Signin')
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: signup,
  });

  return (
    <div>
      <div  className='container my-5  m-auto shadow  rounded-3'>
      <div className="row">
    <div className="col-6">
        <h1 id='H11' className='my-4 text-center'>Create Account</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-md-12'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                className='form-control'
              />
              {formik.errors.name && formik.touched.name && (
                <p className='text-danger'>{formik.errors.name}</p>
              )}
            </div>
            <div className='col-md-12'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                className='form-control'
              />
              {formik.errors.email && formik.touched.email && (
                <p className='text-danger'>{formik.errors.email}</p>
              )}
            </div>
            <div className='col-md-12'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                className='form-control'
              />
              {formik.errors.password && formik.touched.password && (
                <p className='text-danger'>{formik.errors.password}</p>
              )}
            </div>
            <div className='col-md-12'>
              <label>Confirm Password</label>
              <input
                type='password'
                name='rePassword'
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                className='form-control'
              />
              {formik.errors.rePassword && formik.touched.rePassword && (
                <p className='text-danger'>{formik.errors.rePassword}</p>
              )}
            </div>
            <div className='col-md-12'>
              <label>Phone</label>
              <input
                type='tel'
                name='phone'
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                onChange={formik.handleChange}
                className='form-control'
              />
              {formik.errors.phone && formik.touched.phone && (
                <p className='text-danger'>{formik.errors.phone}</p>
              )}
            </div>
            <div className="row">
    <div className="col">
    <button type='submit' id="btn" className='btn btn-light m-4'>
      SIGN UP
    </button>
    </div>
    <div className="col">
    <p className='mt-4'>I have an account<Link to='/signin' className='' >Login</Link></p>
    </div>
  </div>
          </div>
        </form>
      </div>
      <div id='c6' className="col-6 d-flex justify-content-center align-items-center flex-column"><h1 class="greeting">Glad to see you.</h1>
      <p class="account-message fst-italic">Don't have an account? Create your account, it takes less than a minute.</p></div>
    </div>
    </div>
    </div>
  );
 
}
