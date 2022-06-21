import React, { useState, useContext } from 'react'

import Itemcontext from '../context APIs/items/Itemcontext'
import './input.css';

function AddItem(props) {
  const context = useContext(Itemcontext);
  const { addItem, userData } = context;

  const [cred, setCred] = useState({ name: "", type: "", place: "", date: "", description: "", status: "" })
  const [image, setImage] = useState();

  const { name, type, place, date, description, status } = cred;

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }

  const handleAddItem = (e) => {
    e.preventDefault(); // default settings of form
    var FormData = require('form-data');
    let data = new FormData();
    data.append('name', name);
    data.append('type', type);
    data.append('place', place);
    data.append('date', date);
    data.append('description', description);
    data.append('status', status);
    data.append('image', image);
    data.append('user_name', userData.name);

    let a = addItem(data);
    a.then((d) => {
      if (d) {
        props.showAlert("Item added Successfully", 'success')
      }
    });
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {
        localStorage.getItem('auth_token') ?
          <button type="button" className="btn btn-primary btn-lg rounded-pill fixedbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-plus-lg me-1"></i>Add Item
          </button> :
          <button type="button" className="btn btn-primary btn-lg rounded-pill fixedbutton" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <i className="bi bi-plus-lg me-1"></i>Add Item
          </button>
      }


      {/* <!-- Modal - 1 --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            {/* modal Body */}
            <div className="modal-body mx-auto shadow bg-light rounded px-5 py-3 col-12 justify-items-center">
              {/* Form  */}
              <form onSubmit={handleAddItem} method="POST">

                <div className="mb-5">
                  <h1>Add Item</h1>
                  <button type="button" className="btn-close position-absolute top-0 end-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label req">Name of Item</label>
                  <input type="text" className="form-control" id="name" name='name' onChange={onChange} minLength={3} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="type" className="form-label req">Type of Item</label>
                  <input type="text" className="form-control" id="type" name='type' onChange={onChange} minLength={3} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="place" className="form-label req">Place where You lost or found the Item</label>
                  <input type="text" className="form-control" id="place" name='place' onChange={onChange} minLength={3} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label req">Date when You lost or found the Item</label>
                  <input type="date" className="form-control" id="date" name='date' onChange={onChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="status" className="form-label req">Status of Item</label>
                  <select className="form-select form-control" aria-label=".form-select example" name='status' id='status' onChange={onChange}>
                    <option defaultValue=""></option>
                    <option value="Lost">Lost</option>
                    <option value="Found">Found</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label req">Image</label>
                  <input type="file" data-max-size={32154} className="form-control" id="image" name='image' onChange={(e) => {
                    const file = e.target.files[0];
                    setImage(file);
                  }} required />
                  <div className="form-text">Only images are expected</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">description</label>
                  <textarea type="text-field" className="form-control" id="description" name='description' onChange={onChange} />
                </div>

                <div className='mt-5'>
                  <button type="submit" className="btn btn-primary me-2">Add</button>
                  <button type="button" className="btn btn-primary" id="modalDismiss2" data-bs-dismiss="modal">Close</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>

      {/* <!-- Modal - 2 --> */}
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">foundIt says!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              You have not loggedIn! Please LogIn/SignUp to upload any item.
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddItem