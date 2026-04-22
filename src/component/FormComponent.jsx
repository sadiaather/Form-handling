import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import './Form.css'

function FormComponent() {
  let [userForm, setuserForm] = useState({
    name: "",
    fathername: "",
    password: "",
    address: ""
  })

  let [Details, setDetails] = useState(null)

  const handleChange = (e) => {

    console.log(e.target.name)
    console.log(e.target.value);

    setuserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);


    setDetails(userForm)
  }
  return (
  <div className="container mt-5">
  <div className="row shadow-lg p-4 rounded bg-white">

    {/* LEFT SIDE */}
    <div className="col-md-5 d-flex flex-column justify-content-center border-end">
      <h2 className="mb-3 fw-bold">Let’s discuss something cool together ✨</h2>
      <p className="text-muted">Feel free to contact me anytime</p>

      <div className="mt-4">
        <p><strong>Email:</strong> SaulDesign@gmail.com</p>
        <p><strong>Phone:</strong> +123 456 789</p>
        <p><strong>Address:</strong> 123 Street 456 House</p>
      </div>
    </div>

    {/* RIGHT SIDE - FORM */}
    <div className="col-md-7">
      <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control custom-input" name="name" onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Father's Name</label>
            <input type="text" className="form-control custom-input" name="fathername" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control custom-input" name="email" onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control custom-input" name="password" onChange={handleChange} />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control custom-input" name="address" onChange={handleChange} />
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Agree to terms</label>
        </div>

        <button type="submit" className="btn btn-dark w-100 custom-btn">
          Submit
        </button>

      </form>
    </div>

  </div>

      
      {
        Details && (
          <div>
            <h1>Details</h1>
            <h2>{Details.name}</h2>
            <h2>{Details.fathername}</h2>
            <h2>{Details.email}</h2>
            <h2>{Details.password}</h2>
            <h2>{Details.address}</h2>

          </div>
        )
      }
      
    </div>
    
  
  );
  
}

export default FormComponent;




