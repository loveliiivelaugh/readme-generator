import { Container, Col, Form, Row } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const SocialForm =(props) => {

  const { control, register, handleSubmit, errors } = useForm();

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Github</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Hashnode</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Facebook</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Twitter</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>CodeSandbox</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>YouTube</Form.Label>
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
              <Form.Label>Dev.to</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>LinkedIn</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Instagram</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Codepen</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Stack Overflow</Form.Label>
              <Controller
                name="email"
                type="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Reddit</Form.Label>
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
        <Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Website</Form.Label>
            <Controller
              name="email"
              type="email"
              defaultValue="www.michaelwoodward.dev"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => <input onChange={onChange} value={value} />}
              />
            </Form.Group>
        </Row>
        <Row>
          <h4>Others</h4>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Icon</Form.Label>
            <Controller
              name="state"
              control={control}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
              as={Select}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Link</Form.Label>
            <Controller
              name="email"
              type="email"
              defaultValue="www.michaelwoodward.dev"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => <input onChange={onChange} value={value} />}
            />
          </Form.Group>
        </Row>
    </Form>
    </Container>
  )
}

export default SocialForm;