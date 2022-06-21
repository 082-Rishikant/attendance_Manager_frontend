import React, { useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Itemcontext from '../context APIs/items/Itemcontext';
import AdminUsers from './Admin_Users';

export default function AdminHomepage(props) {
  const navigate=useNavigate();
  const context = useContext(Itemcontext);
  const { getUser, getAllUsers, allusers, userData } = context;

  useEffect(() => {
    getUser();
    if (!localStorage.getItem('auth_token')){
      navigate("/")
      props.showAlert("!! You have not loggedin", "danger");
    }
    else if(userData.role!=="admin") {
      navigate("/")
      props.showAlert("!! You are not autherized", "danger");
    }
    else{
      let f = getAllUsers();
      f.then((d) => {
        if (!d) {
          console.log("Items can not be Loaded!!!");
        }
      })
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* 2. Counting details */}
      <section className="py-0 py-xl-5">
        <div className="container">
          <div className="row g-3">

            {/* Counter item */}
            <div className="col-sm-6 col-xl-4">
              <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
                <span className="display-6 lh-1 text-warning mb-0"><i className="fas fa-tv"></i></span>
                <div className="ms-4 h6 fw-normal mb-0">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold me-2" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">{allusers.length}</h5>
                    <span className="mb-0 h5">Users</span>
                  </div>
                  <p className="mb-0">Total Users</p>
                </div>
              </div>
            </div>

            {/*Counter item -->*/}
            <div className="col-sm-6 col-xl-4">
              <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                <span className="display-6 lh-1 text-info mb-0"><i className="bi bi-patch-check-fill"></i></span>
                <div className="ms-4 h6 fw-normal mb-0">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="300" data-purecounter-duration="0">6</h5>
                    <span className="mb-0 h5">K+</span>
                  </div>
                  <p className="mb-0">your match with other total</p>
                </div>
              </div>
            </div>

            {/* Counter item */}
            <div className="col-sm-6 col-xl-4">
              <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                <span className="display-6 lh-1 text-info mb-0"><i className="bi bi-patch-check-fill"></i></span>
                <div className="ms-4 h6 fw-normal mb-0">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="300" data-purecounter-duration="0">6</h5>
                    <span className="mb-0 h5">K+</span>
                  </div>
                  <p className="mb-0">You have got your losted items</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. User's Uploaded Items */}
      <div>

        {/*<!-- Title and Description -->*/}
        <div className="mt-5 mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fs-1">All Registered Users</h2>
          </div>
        </div>

        {/* Items of User */}
        <div>
          {
            allusers.length === 0 ?
              <h3 className='text-center'>No Users Found!!!</h3>
              : <AdminUsers users={allusers} showAlert={props.showAlert} />
          }
        </div>

      </div>
    </>
  )
}
