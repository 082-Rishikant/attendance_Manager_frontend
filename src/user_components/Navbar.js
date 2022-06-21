import React from 'react'
import { Link } from 'react-router-dom'
import Alert from "./Alert";

export default function Navbar(props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* Alert is here */}
        <Alert alert={props.alert}/>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Attendance Manager</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">about us</Link>
              </li>
              {/* <li className="nav-item d-flex flex-row">
                <Link className="nav-link p" to="search"><i className="bi bi-search me-1"></i>Search</Link>
              </li> */}

              {/* Admin****************** */}
              {/* {localStorage.getItem('auth_token') && role==="admin" && <li className="nav-item d-flex flex-row">
                <Link className="nav-link p" to="admin/allItems">Admin</Link>
              </li>} */}

            </ul>

            <div className="d-flex">
                <Link className="btn btn-outline-success" to="login">Login</Link>
                <Link className="btn btn-outline-success ms-3" to="signup">Signup</Link>
              </div>
              
              {/* <p>hello</p> */}
               {/* <div className='d-flex'>
                 <p className='text-white m-2'>Welcome {userData.name}</p>
                 <button className='btn btn-primary mx-1' onClick={handleLogout}>Logout</button>
               </div> */}
              

          </div>
        </div>
      </nav>
    </>
  )
}
