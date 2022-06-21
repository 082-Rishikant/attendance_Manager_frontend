import React from 'react'
import { Link } from 'react-router-dom'
import './input.css';

function Login(props) {

  return (
    <div className='mx-auto mt-5 shadow bg-light rounded px-5 py-3 col-6 justify-items-center'>
      <form >
        <div className="mb-5">
          <h1>Login</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label req">Email</label>
          <input type="email" className="form-control" id="email" name="email"  aria-describedby="emailHelp" placeholder='example@nitt.edu' />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label req">Password</label>
          <input type="password" className="form-control"  id="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Login</button>

        <div className='mt-5 fs-5'>
          <p className='text-muted d-inline'>Create a New Account</p> <Link className="" to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login