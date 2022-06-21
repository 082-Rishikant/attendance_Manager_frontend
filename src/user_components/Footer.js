import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark mt-4">

        <div className="col-md-12 d-flex align-items-center justify-content-center px-3">
          <p className="text-center text-muted">
            Made With
            <i className="bi bi-heart-fill p-0 m-0 px-1" style={{ width: 28, height: 25, "color": "red" }}>
            </i>By
            <a href="https://www.linkedin.com/in/082-rishikant/" className='px-1 text-muted' rel="noopener noreferrer" target={"_blank"}>Rishikant Patel</a>
            <a href="https://www.linkedin.com/in/056navin/" className='px-1 text-muted' rel="noopener noreferrer" target={"_blank"}>Navin Parmar</a>
            <a href="https://www.linkedin.com/in/082-rishikant/" className='px-1 text-muted' rel="noopener noreferrer" target={"_blank"}>Vandana Mandloi</a>
          </p>
        </div>

        <div className="col-md-12 d-flex align-items-center justify-content-center px-3">
          <p className="text-center text-muted">
            Contact Us: 
            <a href="https://mail.google.com/mail/u/0/#inbox" className='text-muted' rel="noopener noreferrer" target={"_blank"}>rishikant9650@gmail.com</a>
          </p>
        </div>

        <ul className="col-md-12 d-flex justify-content-center align-items-center list-unstyled px-3">
          <li><a className="text-muted" href="/" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-twitter"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-instagram"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/rishikant.patel.31/" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-facebook"></i></a></li>
        </ul>

      </footer>

    </>
  )
}
