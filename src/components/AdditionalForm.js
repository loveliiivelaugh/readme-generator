import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AdditionalForm =({ additionalFormData, setAdditionalFormData }) => {
  const [pending, setPending] = React.useState(false);
  
  const { workingOn, collaborate, aboutMe, pronouns, learning, helpMe, contact, funFact } = additionalFormData;

  //function to update form data state upon form change
  const onChange = e => (
    setAdditionalFormData({ ...additionalFormData, [e.target.name]: e.target.value })
  );

  const handleSubmit = (data) => {
    setPending(true);

    console.info(data);

    setPending(false);  
  };

  return (
    <Form onSubmit={e => {
      e.preventDefault();
      handleSubmit(additionalFormData);
    }}>
      <h3>Additional Information</h3>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm currently working on...</Form.Label>
              <Form.Control
                name="workingOn"
                type="text"
                placeholder="Name"
                value={additionalFormData ? workingOn : "life"}
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I want to collaborate on...</Form.Label>
              <Form.Control
                name="collaborate"
                type="text"
                placeholder="Name"
                value={additionalFormData ? collaborate : "anything and everything!"}
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Ask me about...</Form.Label>
              <Form.Control
                name="aboutMe"
                type="text"
                placeholder="Name"
                value={additionalFormData ? aboutMe : "Placeholder title"}
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Pronouns:</Form.Label>
              <Form.Control
                name="pronouns"
                type="text"
                placeholder="Name"
                value={additionalFormData ? pronouns : "He Him His"}
                onChange={onChange}
                />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm currently learning...</Form.Label>
              <Form.Control
                name="learning"
                type="text"
                placeholder="Name"
                value={additionalFormData ? learning : "Placeholder title"}
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm looking for help with...</Form.Label>
              <Form.Control
                name="helpMe"
                type="text"
                placeholder="Name"
                value={additionalFormData ? helpMe : "Placeholder title"}
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>How to reach me:</Form.Label>
              <Form.Control
                name="contact"
                type="text"
                placeholder="Name"
                value={additionalFormData ? contact : "Placeholder title"}
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Fun fact:</Form.Label>
              <Form.Control
                name="funFact"
                type="text"
                placeholder="Name"
                value={additionalFormData ? funFact : "Placeholder title"}
                onChange={onChange}
                />
            </Form.Group>
          </Col>
        </Row>

    </Form>
  )
}

export default AdditionalForm;