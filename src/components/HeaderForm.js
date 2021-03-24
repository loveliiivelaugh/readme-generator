import React from 'react';
import { Button, Col, Form, TextField } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const HeaderForm = ({ headerFormData, setHeaderFormData }) => {
  const [pending, setPending] = React.useState(false);
  const [formAlert, setFormAlert] = React.useState(null);

  const { heading, subtitle, aboutMe, skills, bannerUrl } = headerFormData;

  //function to update form data state upon form change
  const onChange = e => (
    setHeaderFormData({ ...headerFormData, [e.target.name]: e.target.value })
  );

  const handleSubmit = (data) => {
    setPending(true);
    console.info({
      message: "Header form has submited!",
      data: data
  });

    setPending(false);
    // const query = props.id
    //   ? updateItem(props.id, data)
    //   : createItem({ owner: auth.user.id, date: date, ...data });

    // query
    //   .then(() => {
    //     // Let parent know we're done so they can hide modal
    //     props.onDone();
    //   })
    //   .catch((error) => {
    //     // Hide pending indicator
    //     setPending(false);
    //     // Show error alert message
    //     setFormAlert({
    //       type: "error",
    //       message: error.message,
    //     });
    //   });
  };
  
  return (
    <Form onSubmit={e => {
      e.preventDefault();
      handleSubmit(headerFormData);
    }}>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Heading</Form.Label>
          <Form.Control 
            label="Heading"
            type="text"
            placeholder="Name"
            name="heading"
            value={headerFormData ? heading : "Placeholder title"}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            name="subtitle"
            type="text"
            placeholder="Need to add a default subtitle"
            value={headerFormData ? subtitle : "default"}
            onChange={onChange}
          />
        </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>About Me</Form.Label>
        <Form.Control
            name="about"
            as="textarea"
            type="text"
            placeholder="Something about yourself..."
            value={headerFormData ? aboutMe : "something about you"}
            onChange={onChange}
          />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Skills</Form.Label>
        <Form.Control
          name="skills"
          type="text"
          placeholder="List your skills..."
          value={headerFormData ? skills : "all my skills"}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Banner URL</Form.Label>
        <Form.Control
          name="bannerUrl"
          type="url"
          placeholder="Put a url of an image."
          value={headerFormData ? bannerUrl : ""}
          onChange={onChange}
        />
      </Form.Group>

    </Form>
  )
}

export default HeaderForm;