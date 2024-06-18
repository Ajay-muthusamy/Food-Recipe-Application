import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Outlet,Link } from 'react-router-dom';
import '../login/login.css'
const Login = () => {
  return (
    <div>
      <div className="container mt-4">
        <h1 className='text-dark'>Hello,</h1>
        <h4 className='text-dark'>Welcome Back</h4>
        <div className="container">
        <form action="" className='text-dark d-flex flex-column justify-content-center align-items-center mt-5'>
        <label htmlFor="" className='text-start m-2 fw-bold'>Email</label>
        <input type="text" className='form-control p-3 ' id="frm" placeholder='Enter Email' />

        <label htmlFor="" className='m-2 fw-bold'>Password</label>
        <input type="email" className='form-control p-3 ' id="frm" placeholder='Enter Password' />
        <p className='mt-3 p1'>Forgot Password?</p>
        <button type="button" className="btn btn-success mt-1 fs-5 ps-5 pe-5 pt-2 pb-2 btn1" >Sign Up<FaArrowRight /></button>
        <p className='mt-3'>Don't have an account? <Link to="/register">Sign up</Link></p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
