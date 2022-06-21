import React from 'react'


export default function Homepage(props) {


  return (
    <>
      {/* 1. staring image */}
      <div className="position-relative overflow-hidden text-center">
        <div className="col-md-7 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Upload your student attendance Sheet</h1>
          <p className="lead fw-normal">This is the platefom where you can upload the attendance excel sheet and manage the student attendance particularly.</p>
          <p className="lead fw-normal">YOu can also search for a particular students attendance in any semester.</p>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>


      {/* 2. User's Uploaded Items */}
      <div>

        {/*<!-- Title and Description -->*/}
        <div className="mt-5 mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fs-1">Items Uploaded by you</h2>
            <p className="mb-0">These are the those items that you have uploaded that you have found/lost somewhere</p>
          </div>
        </div>


        {/*3. Items of User */}
        <div className="container">
          <div className='row my-2'>

            {/*<!-- Card Body starts here -->*/}
            <div className="col-sm-6 col-lg-4 col-xl-3 mt-4 rounded">
              <div className="card shadow h-100">
                <div style={{ "transform": "rotate(0)" }}>
                  {/* **Uploader Name** */}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>
                    By 
                  </span>

                  {/*<!-- Image -->*/}
                  <img src="/"
                    className="card-img-top rounded mw-100" alt="course"
                     />

                  {/*<!-- Card body -->*/}
                  <div className="card-body pe-2 py-1 m-0">
                    {/*<!-- Title -->*/}
                    <h5 className="card-title fw-dark m-0 mb-1">
                      Name : 
                    </h5>
                    <p className="mb-1 text-truncate-2 text-muted">
                      Type : 
                    </p>

                    <small className='text-muted'>
                      Found at  By <strong></strong> on . . . .<button type="button" className="btn btn-link stretched-link text-muted ps-1 pt-0" >Read More</button>
                      {/* <Link className="text-muted stretched-link" to="/itemview">Read More</Link> */}
                      {/* {date ? new Date(date).toGMTString().slice(0, 16) : "..."} */}
                    </small>
                  </div>
                </div>

                {/*<!-- Card footer -->*/}
                <div className="card-footer pt-0">
                  <div className="d-flex justify-content-between">

                    <span className="h6 fw-light mb-0">
                      <button type="button"  className="btn btn-light btn-lg p-0">
                        <i className="bi bi-trash"></i>
                      </button>
                    </span>

                    <span className="h6 fw-light mb-0">
                      <button type="button" className="btn btn-light btn-lg p-0">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </span>

                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Card Body starts here -->*/}
            <div className="col-sm-6 col-lg-4 col-xl-3 mt-4 rounded">
              <div className="card shadow h-100">
                <div style={{ "transform": "rotate(0)" }}>
                  {/* **Uploader Name** */}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>
                    By 
                  </span>

                  {/*<!-- Image -->*/}
                  <img src="/"
                    className="card-img-top rounded mw-100" alt="course"
                     />

                  {/*<!-- Card body -->*/}
                  <div className="card-body pe-2 py-1 m-0">
                    {/*<!-- Title -->*/}
                    <h5 className="card-title fw-dark m-0 mb-1">
                      Name : 
                    </h5>
                    <p className="mb-1 text-truncate-2 text-muted">
                      Type : 
                    </p>

                    <small className='text-muted'>
                      Found at  By <strong></strong> on . . . .<button type="button" className="btn btn-link stretched-link text-muted ps-1 pt-0" >Read More</button>
                      {/* <Link className="text-muted stretched-link" to="/itemview">Read More</Link> */}
                      {/* {date ? new Date(date).toGMTString().slice(0, 16) : "..."} */}
                    </small>
                  </div>
                </div>

                {/*<!-- Card footer -->*/}
                <div className="card-footer pt-0">
                  <div className="d-flex justify-content-between">

                    <span className="h6 fw-light mb-0">
                      <button type="button"  className="btn btn-light btn-lg p-0">
                        <i className="bi bi-trash"></i>
                      </button>
                    </span>

                    <span className="h6 fw-light mb-0">
                      <button type="button" className="btn btn-light btn-lg p-0">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </span>

                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Card Body starts here -->*/}
            <div className="col-sm-6 col-lg-4 col-xl-3 mt-4 rounded">
              <div className="card shadow h-100">
                <div style={{ "transform": "rotate(0)" }}>
                  {/* **Uploader Name** */}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>
                    By 
                  </span>

                  {/*<!-- Image -->*/}
                  <img src="/"
                    className="card-img-top rounded mw-100" alt="course"
                     />

                  {/*<!-- Card body -->*/}
                  <div className="card-body pe-2 py-1 m-0">
                    {/*<!-- Title -->*/}
                    <h5 className="card-title fw-dark m-0 mb-1">
                      Name : 
                    </h5>
                    <p className="mb-1 text-truncate-2 text-muted">
                      Type : 
                    </p>

                    <small className='text-muted'>
                      Found at  By <strong></strong> on . . . .<button type="button" className="btn btn-link stretched-link text-muted ps-1 pt-0" >Read More</button>
                      {/* <Link className="text-muted stretched-link" to="/itemview">Read More</Link> */}
                      {/* {date ? new Date(date).toGMTString().slice(0, 16) : "..."} */}
                    </small>
                  </div>
                </div>

                {/*<!-- Card footer -->*/}
                <div className="card-footer pt-0">
                  <div className="d-flex justify-content-between">

                    <span className="h6 fw-light mb-0">
                      <button type="button"  className="btn btn-light btn-lg p-0">
                        <i className="bi bi-trash"></i>
                      </button>
                    </span>

                    <span className="h6 fw-light mb-0">
                      <button type="button" className="btn btn-light btn-lg p-0">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </span>

                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Card Body starts here -->*/}
            <div className="col-sm-6 col-lg-4 col-xl-3 mt-4 rounded">
              <div className="card shadow h-100">
                <div style={{ "transform": "rotate(0)" }}>
                  {/* **Uploader Name** */}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>
                    By 
                  </span>

                  {/*<!-- Image -->*/}
                  <img src="/"
                    className="card-img-top rounded mw-100" alt="course"
                     />

                  {/*<!-- Card body -->*/}
                  <div className="card-body pe-2 py-1 m-0">
                    {/*<!-- Title -->*/}
                    <h5 className="card-title fw-dark m-0 mb-1">
                      Name : 
                    </h5>
                    <p className="mb-1 text-truncate-2 text-muted">
                      Type : 
                    </p>

                    <small className='text-muted'>
                      Found at  By <strong></strong> on . . . .<button type="button" className="btn btn-link stretched-link text-muted ps-1 pt-0" >Read More</button>
                      {/* <Link className="text-muted stretched-link" to="/itemview">Read More</Link> */}
                      {/* {date ? new Date(date).toGMTString().slice(0, 16) : "..."} */}
                    </small>
                  </div>
                </div>

                {/*<!-- Card footer -->*/}
                <div className="card-footer pt-0">
                  <div className="d-flex justify-content-between">

                    <span className="h6 fw-light mb-0">
                      <button type="button"  className="btn btn-light btn-lg p-0">
                        <i className="bi bi-trash"></i>
                      </button>
                    </span>

                    <span className="h6 fw-light mb-0">
                      <button type="button" className="btn btn-light btn-lg p-0">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </span>

                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Card Body starts here -->*/}
            <div className="col-sm-6 col-lg-4 col-xl-3 mt-4 rounded">
              <div className="card shadow h-100">
                <div style={{ "transform": "rotate(0)" }}>
                  {/* **Uploader Name** */}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>
                    By 
                  </span>

                  {/*<!-- Image -->*/}
                  <img src="/"
                    className="card-img-top rounded mw-100" alt="course"
                     />

                  {/*<!-- Card body -->*/}
                  <div className="card-body pe-2 py-1 m-0">
                    {/*<!-- Title -->*/}
                    <h5 className="card-title fw-dark m-0 mb-1">
                      Name : 
                    </h5>
                    <p className="mb-1 text-truncate-2 text-muted">
                      Type : 
                    </p>

                    <small className='text-muted'>
                      Found at  By <strong></strong> on . . . .<button type="button" className="btn btn-link stretched-link text-muted ps-1 pt-0" >Read More</button>
                      {/* <Link className="text-muted stretched-link" to="/itemview">Read More</Link> */}
                      {/* {date ? new Date(date).toGMTString().slice(0, 16) : "..."} */}
                    </small>
                  </div>
                </div>

                {/*<!-- Card footer -->*/}
                <div className="card-footer pt-0">
                  <div className="d-flex justify-content-between">

                    <span className="h6 fw-light mb-0">
                      <button type="button"  className="btn btn-light btn-lg p-0">
                        <i className="bi bi-trash"></i>
                      </button>
                    </span>

                    <span className="h6 fw-light mb-0">
                      <button type="button" className="btn btn-light btn-lg p-0">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </span>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/*<!-- Card body Ends here -->*/}

      </div>
    </>
  )
}
