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
    props.setHeaderFormData(data);
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
        <Form.Group controlId="formGridEmail">
          <Form.Label>Heading</Form.Label>
          <Controller
            name="heading"
            type="text"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Subtitle</Form.Label>
          <Controller
            name="subtitle"
            type="text"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>About Me</Form.Label>
        <Controller
            name="aboutMe"
            as="textarea"
            type="text"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Skills</Form.Label>
        <Controller
          name="skills"
          type="text"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => <input onChange={onChange} value={value} />}
        />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Banner URL</Form.Label>
          <Controller
            name="bannerUrl"
            type="url"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <input onChange={onChange} value={value} />}
          />
        </Form.Group>
{/* 
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
         */}
      <Button variant="primary" type="submit" disabled={pending}>
        {!pending && <span>Save</span>}

        {pending && "Loading..." }
        
        Submit
      </Button>
    </Form>
  )
}

export default HeaderForm;