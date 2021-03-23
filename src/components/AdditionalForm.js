import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";

const AdditionalForm =(props) => {

  const { control, register, handleSubmit, errors } = useForm();

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm currently working on...</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I want to collaborate on...</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Ask me about...</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Pronouns:</Form.Label>
              <Controller
                name="email"
                type="email"
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
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>I'm looking for help with...</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>How to reach me:</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Fun fact:</Form.Label>
              <Controller
                name="email"
                type="email"
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

      </Form>
    </Container>
  )
}

export default AdditionalForm;