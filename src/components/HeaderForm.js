import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const HeaderForm = (props) => {
  const [pending, setPending] = React.useState(false);
  const [formAlert, setFormAlert] = React.useState(null);

  const { control, register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setPending(true);

    console.info(data);
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
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Controller
            name="email"
            type="email"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Controller
            name="password"
            type="password"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Controller
            name="address"
            type="text"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Controller
          name="address2"
          type="text"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => <input onChange={onChange} value={value} />}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Controller
            name="city"
            type="text"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
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

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Controller
            name="zip"
            type="number"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={pending}>
        {!pending && <span>Save</span>}

        {pending && "Loading..." }
        
        Submit
      </Button>
    </Form>
  )
}

export default HeaderForm;