import React, { useContext, useState, useRef } from 'react'
import Itemcontext from '../context APIs/items/Itemcontext';
import Item from './Item'
import './input.css'

function Items(props) {
  const context = useContext(Itemcontext);
  const { editItem, getUserById, uploader } = context;
  // const { filterFlag, filterItemStatus, items } = props;

  // const [filteredItems, setFilteredItems] = useState([]);
  // setFilteredItems(items);
  // if(filterFlag){
  //   const newItems = items.filter((e) => { return e.status === filterItemStatus });
  //   setFilteredItems(newItems);
  // }

  const [image, setImage] = useState();
  const [newItem, setnewItem] = useState({ id: "", ename: "", edescription: "", etype: "", eplace: "", edate: "" });
  const refShow = useRef(null);
  const refHide = useRef(null);

  const updateItem = (item) => {
    setnewItem({ id: item._id, ename: item.name, edescription: item.description, etype: item.type, eplace: item.place, edate: item.date });
    refShow.current.click();
  }

  const onChange = (e) => {
    setnewItem({ ...newItem, [e.target.name]: e.target.value });
  }

  const { id, ename, etype, eplace, edate, edescription } = newItem;

  const handleUpdateItem = (e) => {
    e.preventDefault(); // default settings of form
    var FormData = require('form-data');
    let data = new FormData();
    data.append('id', id);
    data.append('name', ename);
    data.append('type', etype);
    data.append('place', eplace);
    data.append('date', edate);
    data.append('description', edescription);
    data.append('image', image);

    let a = editItem(data, id);
    a.then((d) => {
      if (d) {
        props.showAlert("Item Updated successfully", "success");
        refHide.current.click();
      }
    })
  }

  const [viewItem, setViewItem] = useState([]);
  const [flag, setFlag] = useState(false)
  const refViewItemShow = useRef(null);

  const handleViewItem = (item) => {
    setViewItem(item);
    let f = getUserById(item.user);
    f.then((d) => {
      if (d) {
        setFlag(true);
        refViewItemShow.current.click();
      } else {
        alert("Can not fetch the Item!!!!")
      }
    })
  }



  return (
    <>
      {/* 1. ***** Modal for Update Item***** */}
      {/* 
      // <!-- Button trigger modal --> */}
      <button ref={refShow} type="button" className="btn btn-primary btn-lg d-none" data-bs-toggle="modal" data-bs-target="#exampleModal3">
      </button>
      {/* 
      // <!-- Modal --> */}
      <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            {/* modal Body */}
            <div className="modal-body mx-auto shadow bg-light rounded px-5 py-3 col-12 justify-items-center">
              {/* Form  */}
              <form onSubmit={handleUpdateItem} method="PUT">

                <div className="mb-5">
                  <h1>Update Item</h1>
                  <button type="button" className="btn-close position-absolute top-0 end-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="mb-3">
                  <label htmlFor="ename" className="form-label req">Name of Item</label>
                  <input type="text" className="form-control" id="ename" name='ename' onChange={onChange} minLength={3} value={newItem.ename} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="etype" className="form-label req">Type of Item</label>
                  <input type="text" className="form-control" id="etype" name='etype' onChange={onChange} minLength={3} value={newItem.etype} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="eplace" className="form-label req">Place where You lost or found the Item</label>
                  <input type="text" className="form-control" id="eplace" name='eplace' onChange={onChange} value={newItem.eplace} minLength={3} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="edate" className="form-label req">Date when You lost or found the Item</label>
                  <input type="date" className="form-control" id="edate" name='edate' onChange={onChange} value={newItem.edate.slice(0, 10)} />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label req">Image</label>
                  <input type="file" className="form-control" id="image" name='image' onChange={(e) => {
                    const file = e.target.files[0];
                    setImage(file);
                  }} required />
                  <div className="form-text">Only images are expected</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">description</label>
                  <textarea type="text-field" className="form-control" id="edescription" name='edescription' onChange={onChange} value={newItem.edescription} />
                </div>

                <div className='mt-5'>
                  <button type="submit" className="btn btn-primary me-2">Update Item</button>
                  <button ref={refHide} type="button" className="btn btn-primary" id="modalDismiss" data-bs-dismiss="modal">Close</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>

      {/* 2. ***** View Item ***** */}
      {/* Modal Trigger Button */}
      <button ref={refViewItemShow} type="button" data-bs-toggle="modal" data-bs-target="#itemViewModal" className="btn btn-link d-none">Read More</button>

      {/* 
      // <!-- Modal --> */}
      <div className="modal fade " id="itemViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" data-bs-keyboard="false" data-bs-backdrop="static" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">

            <div className="modal-header bg-light">
              <button type="button" className="position-absolute left-0 border-0 btn-light btn-lg p-0" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setFlag(false) }}>
                <i className="bi bi-arrow-left"></i>
              </button>
              {/* <h5 className="modal-title text-center" id="exampleModalLabel">Modal title</h5> */}
            </div>

            <div className="modal-body p-0">
              <div className="container marketing">
                {/* <!-- START THE FEATURETTES --> */}
                <div className="row featurette mt-3">

                  <ul className="col-md-7 order-md-2 list-unstyled">
                    <li><h2 className="featurette-heading fw-normal lh-1"><span className="text-muted">Uploader Details</span></h2></li>
                    <li><p className="lead"><strong className='text-muted'>Name:</strong> {uploader.name}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Modile No:</strong> {uploader.mobile_no}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Department:</strong> {uploader.department}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Gender:</strong> {uploader.gender}</p></li>
                  </ul>

                  <div className="col-md-5 order-md-1">
                    {flag && <img src={`http://localhost:5000/user-img/${uploader.user_image}`}
                      alt="course"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "http://localhost:5000/user-img/default.png";
                      }} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ "width": 400, "height": 400 }} preserveAspectRatio="xMidYMid slice" focusable="false" />}
                  </div>

                </div>

                <hr className="featurette-divider" />

                <div className="row featurette mb-2">

                  <ul className="col-md-7 list-unstyled">
                    <li><h2 className="featurette-heading fw-normal lh-1"><span className="text-muted">Item Details.</span></h2></li>
                    <li><p className="lead"><strong className='text-muted'>Name:</strong> {viewItem.name}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Type:</strong> {viewItem.type}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Status:</strong> {viewItem.status}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Is Reported:</strong> {viewItem.is_reported ? "Yes" : "No"}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Place Where it Found/Lost:</strong> {viewItem.place}</p></li>
                    <li><p className="lead"><strong className='text-muted'>Date:</strong> {flag && viewItem.date.slice(0, 10)}</p></li>
                    {/* <li><p className="lead"><small className="text-muted">Last updated 3 mins ago</small></p></li> */}
                  </ul>

                  <div className="col-md-5">
                    {flag && <img src={`http://localhost:5000/item-img/${viewItem.image_name}`}
                      alt="course"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "http://localhost:5000/item-img/default.png";
                      }} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ "width": 400, "height": 400 }} preserveAspectRatio="xMidYMid slice" focusable="false" />}
                  </div>
                </div>

              </div>



            </div>
          </div>
        </div>
      </div>




      {/* 3. ***** Uploaded Items of User ***** */}
      <div className="container">
        <div className='row my-2'>
          {/* use map */}
          {props.items.map((item, id) => {
              return <Item handleViewItem={handleViewItem} key={id} flag={props.flag} item={item} updateItem={updateItem} showAlert={props.showAlert} />
          })}
        </div>
      </div>
    </>
  )
}

export default Items