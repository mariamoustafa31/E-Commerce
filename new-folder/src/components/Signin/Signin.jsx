/* eslint-disable no-unused-vars */
import React from 'react'
import './Signin.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';



export default function Signin() {
  let navigate =useNavigate()
  // Custom validation schema
  const validationSchema = Yup.object({
    email: Yup.string().required('This email is required').email('Enter a valid email'),
    
    password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password must start with an uppercase letter and be 6-8 characters long'),
    
  });

    function signin(values)  {
     
    console.log(values);

    navigate('/Home')
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    
      password: '',
      
    },
    validationSchema: validationSchema,
    onSubmit: signin,
  });

  return (
    <div>
      <div  className='container my-5  m-auto shadow  rounded-3'>
      <div className="row">
    
      <div id='c6' className="col-6 d-flex justify-content-center align-items-center flex-column"><h1 class="greeting">Hello,Friend!</h1>
      <p className="account-message fst-italic">Enter your personal details and start journey with us.</p></div>
      <div className="col-6">
        <h1 id='H11' className='my-4 text-center'>Login Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
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
            
            <div className="row">
    <div className="col">
    <button type='submit' id="btn" className='btn btn-light m-4'>
      LOGIN
    </button>
    </div>
    <div className="col">
    <p className='mt-4'><Link to='/signin' className='' ></Link></p>
    </div>
  </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
 
}
