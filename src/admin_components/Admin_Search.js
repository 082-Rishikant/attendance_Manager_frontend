import React, { useState, useContext } from 'react';

import Items from '../user_components/Items';
import Itemcontext from '../context APIs/items/Itemcontext';

function Admin_Search(props) {
  const context = useContext(Itemcontext);
  const { searchAnItem } = context;

  const [s_tags, sets_tags] = useState({ name: "", type: "", place: "", date: "" });
  const [s_items, setS_items] = useState([]);

  const onChange = (e) => {
    sets_tags({ ...s_tags, [e.target.name]: e.target.value });
  }

  const { name, type, place, date } = s_tags;

  const handleSearch = async (e) => {
    e.preventDefault(); // default settings of form
    if (localStorage.getItem('auth_token')) {
      let a = searchAnItem(name, type, place, date);
      a.then((d) => {
        if (d.success) {
          setS_items(d.items_list);
        }
      })
    } else {
      props.showAlert("!! You have not loggedin", "danger");
    }
  }

  return (
    <>
      {/* form */}
      <div className='mx-auto shadow bg-light rounded px-5 py-3 mt-4 col-6 justify-items-center'>
        <form onSubmit={handleSearch} method="POST">
          <div className="mb-5">
            <h1>Search</h1>
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
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>

      {/* ****Results**** */}



      {
        s_items.length === 0 ?
          <p className='text-center mt-5 mb-4'>No Results</p> :
          <div>
            <div className='text-center mt-5 mb-4'>
              <h2>Search Results</h2>
            </div>
            <Items items={s_items} flag={false} />
          </div>
      }
    </>
  )
}

export default Admin_Search