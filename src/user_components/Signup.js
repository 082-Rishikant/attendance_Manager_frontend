import React from 'react'
import { Link } from 'react-router-dom';
import './input.css';

function Signup(props) {

  return (
    <div className='mx-auto mt-4 shadow bg-light rounded px-5 py-3 col-6 justify-items-center'>
      <form  method="POST">
        <div className="mb-5">
          <h1>Signup</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label req">Your Name</label>
          <input type="text" className="form-control" id="name" name='name'  minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label req">webmail address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  name='email' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile_no" className="form-label req">Mobile Number</label>
          <input type="text" className="form-control" id="mobile_no" name='mobile_no'  minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Your Department</label>
          <input type="text" className="form-control" id="department" name='department'  minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label req">Password</label>
          <input type="password" className="form-control" id="password" name='password'  minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label req">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword'  minLength={5} required />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label req">Gender</label>
          <select className="form-select form-control" aria-label=".form-select example" name='gender' id='gender' >
            <option defaultValue=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="user_image" className="form-label">Your Image</label>
          <input type="file" className="form-control" id="user_image" name='user_image' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        <div className='mt-5 fs-5'>
          <p className='text-muted d-inline'>Already have an Account? </p> <Link className="" to="/login">Signin</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup