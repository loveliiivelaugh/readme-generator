import React from 'react';
import { Container, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Select from "react-select";

const SocialForm = ({ socialFormData, setSocialFormData }) => {
  const [pending, setPending] = React.useState(false);
  const [formAlert, setFormAlert] = React.useState(null);

  const { 
    github, hashnode, facebook, twitter, codesandbox, youtube,
    devTo, linkedIn, codepen, stackoverflow, reddit, website, instagram
  } = socialFormData;

  //function to update form data state upon form change
  const onChange = e => (
    setSocialFormData({ ...socialFormData, [e.target.name]: e.target.value })
  );

  const handleSubmit = (data) => {
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
  
  console.info(socialFormData)
  return (
    <Form onSubmit={e => {
      e.preventDefault();
      handleSubmit(socialFormData);
    }}>
      <h3>Social Information</h3>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Github</Form.Label>
              <Form.Control
                name="github"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? github : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Hashnode</Form.Label>
              <Form.Control
                name="hasnode"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? hashnode : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                name="facebook"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? facebook : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                name="twitter"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? twitter : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>CodeSandbox</Form.Label>
              <Form.Control
                name="codesandbox"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? codesandbox : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>YouTube</Form.Label>
              <Form.Control
                name="youtube"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? youtube : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Dev.to</Form.Label>
              <Form.Control
                name="devTo"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? devTo : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                name="linkedIn"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? linkedIn : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                name="instagram"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? instagram : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Codepen</Form.Label>
              <Form.Control
                name="codepen"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? codepen : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Stack Overflow</Form.Label>
              <Form.Control
                name="stackoverflow"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? stackoverflow : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Reddit</Form.Label>
              <Form.Control
                name="reddit"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? reddit : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Website</Form.Label>
              <Form.Control
                name="website"
                type="url"
                placeholder="www.placeholder.com"
                value={socialFormData ? website : "www.placeholder.com"}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Others</h4>
          </Col>
        </Row>
        
    </Form>
  )
}

export default SocialForm;