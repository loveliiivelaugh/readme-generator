import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";

const AdditionalForm =(props) => {
  const [pending, setPending] = React.useState(false);

  const { control, register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setPending(true);

    console.info(data);
    props.setAdditionalFormData(data);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm currently working on...</Form.Label>
              <Controller
                name="workingOn"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I want to collaborate on...</Form.Label>
              <Controller
                name="collaborate"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Ask me about...</Form.Label>
              <Controller
                name="aboutMe"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Pronouns:</Form.Label>
              <Controller
                name="pronouns"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm currently learning...</Form.Label>
              <Controller
                name="learning"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm looking for help with...</Form.Label>
              <Controller
                name="helpMe"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>How to reach me:</Form.Label>
              <Controller
                name="contact"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Fun fact:</Form.Label>
              <Controller
                name="funFact"
                type="text"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
          </Col>
        </Row>

{/* 
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> 
*/}

      <Button variant="primary" type="submit" disabled={pending}>
        {!pending && <span>Save</span>}

        {pending && "Loading..." }
        
        Submit
      </Button>

    </Form>
  )
}

export default AdditionalForm;