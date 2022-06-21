import React, { useContext, useEffect } from 'react'
import Itemcontext from '../context APIs/items/Itemcontext';
import Adminitems from './Admin_items';

export default function AdminHomepage(props) {
  const context = useContext(Itemcontext);
  const { getAllItems, allitems, getUser } = context;

  useEffect(() => {
    if (localStorage.getItem('auth_token')) {
      let f=getAllItems();
      f.then((d)=>{
        if(!d.success){
          props.showAlert(d.message, "danger");
        }
      })
      getUser();
    }
    else {
      props.showAlert("!! You have not loggedin", "danger");
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
                      <h5 className="purecounter mb-0 fw-bold me-2" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">{allitems.length}</h5>
                      <span className="mb-0 h5">Items</span>
                    </div>
                    <p className="mb-0">Users have uploaded total Items</p>
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
                    <p className="mb-0">Users got or lost total items</p>
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
              <h2 className="fs-1">All Items Uploaded by All Users</h2>
              <p className="mb-0">These are the those items that All Users have uploaded that Users have found/lost somewhere</p>
            </div>
          </div>

          {/* Items of User */}
          <div>
            {
              allitems.length === 0 ?
              <h3 className='text-center'>No Item has been uploaded by the Users</h3>
              : <Adminitems allitems={allitems} showAlert={props.showAlert} />
            }
          </div>

        </div>

      </>
  )
}
