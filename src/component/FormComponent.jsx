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
    <>
      <h1>FORM</h1>
      <Form action="" onSubmit={handleSubmit} className='main'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridfather's name">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control type="text" placeholder="Enter father's name" name='fathername' onChange={handleChange} />
          </Form.Group>
          <Row className="mb-3"></Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name='address' onChange={handleChange} />
        </Form.Group>



        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>

      </Form>
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
    </>
  );
}

export default FormComponent;


