import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Itemcontext from '../context APIs/items/Itemcontext';
import Alert from "../user_components/Alert";

function AdminNavbar(props) {
  let navigate = useNavigate();

  const context = useContext(Itemcontext);
  const { userData , clearItems} = context;

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    clearItems();
    props.showAlert("Logged Out successfully", 'success');
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* Alert is here */}
        <Alert alert={props.alert}/>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="allItems">Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="allUsers">Users</Link>
              </li>
              <li className="nav-item d-flex flex-row">
                <Link className="nav-link p" to="adminSearch"><i className="bi bi-search me-1"></i>Search</Link>
              </li>
            </ul>

            {!localStorage.getItem('auth_token')
              ? <div className="d-flex">
                <Link className="btn btn-outline-success" to="login">Login</Link>
              </div>
              : <div className='d-flex'>
                <p className='text-white m-2'>Welcome {userData.name}</p>
                <button className='btn btn-primary mx-1' onClick={handleLogout}>Logout</button>
              </div>}

          </div>
        </div>
      </nav>
  )
}

export default AdminNavbar