import React, { useContext } from 'react'
import Itemcontext from '../context APIs/items/Itemcontext';

function Item(props) {
  const context = useContext(Itemcontext);
  const { deleteItem, userData } = context;
  const { user_name, image_name, user, name, place, type, _id } = props.item

  return (
    <>
      {/*<!-- Card Body starts here -->*/}
      <div className="col-sm-6 col-lg-4 col-xl-3 mt-4 rounded">
        <div className="card shadow h-100">
          <div style={{ "transform": "rotate(0)" }}>
            {/* **Uploader Name** */}
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>
              By {user === userData._id ? "You" : user_name}
            </span>

            {/*<!-- Image -->*/}
            <img src={`http://localhost:5000/item-img/${image_name}`}
              className="card-img-top rounded mw-100" alt="course"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "http://localhost:5000/item-img/default.png";
              }} style={{"maxWidth":300, "maxHeight":300}} />

            {/*<!-- Card body -->*/}
            <div className="card-body pe-2 py-1 m-0">
              {/*<!-- Title -->*/}
              <h5 className="card-title fw-dark m-0 mb-1">
                Name : {name}
              </h5>
              <p className="mb-1 text-truncate-2 text-muted">
                Type : {type}
              </p>

              <small className='text-muted'>
                Found at {place ? place : "Campus"} By <strong>{user_name ? user_name : "Unkown"}</strong> on . . . .<button type="button" className="btn btn-link stretched-link text-muted ps-1 pt-0" onClick={()=>{props.handleViewItem(props.item)}}>Read More</button>
                {/* <Link className="text-muted stretched-link" to="/itemview">Read More</Link> */}
                {/* {date ? new Date(date).toGMTString().slice(0, 16) : "..."} */}
              </small>
            </div>
          </div>

          {/*<!-- Card footer -->*/}
          {props.flag && <div className="card-footer pt-0">
            <div className="d-flex justify-content-between">

              <span className="h6 fw-light mb-0">
                <button type="button" onClick={() => {
                  let flag = window.confirm("Do you realy want to delete this Item?");
                  if (flag) {
                    let a = deleteItem(_id);
                    a.then((d) => {
                      if (d) {
                        props.showAlert("Item deleted successfully", 'success');
                      }
                    })
                  }
                }} className="btn btn-light btn-lg p-0">
                  <i className="bi bi-trash"></i>
                </button>
              </span>

              <span className="h6 fw-light mb-0">
                <button type="button" onClick={() => { props.updateItem(props.item) }} className="btn btn-light btn-lg p-0">
                  <i className="bi bi-pencil-square"></i>
                </button>
              </span>

            </div>
          </div>
          }
        </div>
      </div>
      {/*<!-- Card body Ends here -->*/}

    </>
  )
}

export default Item