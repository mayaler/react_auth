import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function BookRegister() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [register, setRegister] = useState(false);
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-react-auth-app.herokuapp.com/bookregister",
      data: {
        title,
        firstName,
        lastName,
        url,
        summary,
        isbn,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* title */}
        <Form.Group controlId='formBookTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter title'
          />
        </Form.Group>

        {/* Author */}
        <Form.Group controlId='formBookAuthorFname'>
          <Form.Label>Author First name</Form.Label>
          <Form.Control
            type='text'
            name='first_name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Author first name'
          />
        </Form.Group>

        <Form.Group controlId='formBookAuthorLname'>
          <Form.Label>Author Last name</Form.Label>
          <Form.Control
            type='text'
            name='last_name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Author last name'
          />
        </Form.Group>

        {/* Url */}
        <Form.Group controlId='formBookImageUrl'>
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control
            type='text'
            name='image'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Image Url'
          />
        </Form.Group>

        {/* ISBN */}
        <Form.Group controlId='formBookIsbn'>
          <Form.Label>isbn</Form.Label>
          <Form.Control
            type='text'
            name='isbn'
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder='isbn'
          />
        </Form.Group>

        {/* Description */}
        <Form.Group controlId='formBookDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            name='summary'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder='Book description'
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant='primary'
          type='submit'
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {/* display success message */}
        {register ? (
          <p className='text-success'>
            The book had been Registered Successfully
          </p>
        ) : (
          <p className='text-danger'>The book was not yet Registered</p>
        )}
      </Form>
    </>
  );
}
