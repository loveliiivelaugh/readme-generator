import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";

const OthersForm =(props) => {

  const { control, register, handleSubmit, errors } = useForm();

  return (
    <Form>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Github</Form.Label>
        <Controller
          name="email"
          type="text"
          defaultValue="Enter your username..."
          rules={{ required: true }}
          control={control}
          defaultValue=""
          render={({ onChange, value }) => <input onChange={onChange} value={value} />}
        />
        <p>*Github username required.</p>
      </Form.Group>

      <h3>Statistics</h3>
      <Row>
        <Col>
          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Show profile views" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Show GitHub Activity Graph" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Include private repositories" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Show GitHub statistics" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Show most used languages" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>
        </Col>
      </Row>

      <h3>Github Trophies</h3>
      <Row>
        <Form.Group id="formGridCheckbox">
          <Controller
            name="MyCheckbox"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={props =>
              <Form.Check 
              type="checkbox" 
              label="Show Trophies" 
              onChange={e => props.onChange(e.target.checked)}
              checked={props.value}
              />
            } // props contains: onChange, onBlur and value
          />
        </Form.Group>
      </Row>


      <h3>Github Badges</h3>
      <Row>
        <Col>
          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Arctic Contributor" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Stars Program" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="GitHub Pro" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Developer Program" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Controller
              name="MyCheckbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={props =>
                <Form.Check 
                type="checkbox" 
                label="Sponsor" 
                onChange={e => props.onChange(e.target.checked)}
                checked={props.value}
                />
              } // props contains: onChange, onBlur and value
              />
          </Form.Group>
        </Col>
      </Row>

      <h3>Github Metrics</h3>
      <Row>
        <Form.Group id="formGridCheckbox">
          <Controller
            name="MyCheckbox"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={props =>
              <Form.Check 
              type="checkbox" 
              label="Show GitHub metrics" 
              onChange={e => props.onChange(e.target.checked)}
              checked={props.value}
              />
            } // props contains: onChange, onBlur and value
          />
        </Form.Group>
      </Row>

      <h3>Github Streak Stats</h3>
      <Row>
        <Form.Group id="formGridCheckbox">
          <Controller
            name="MyCheckbox"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={props =>
              <Form.Check 
              type="checkbox" 
              label="Show GitHub Streak Stats" 
              onChange={e => props.onChange(e.target.checked)}
              checked={props.value}
              />
            } // props contains: onChange, onBlur and value
          />
        </Form.Group>
      </Row>

    </Form>
  )
}

export default OthersForm;