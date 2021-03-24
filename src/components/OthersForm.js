import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const OthersForm = ({ othersFormData, setOthersFormData }) => {
  const [pending, setPending] = React.useState(false);
  const [formAlert, setFormAlert] = React.useState(null);

  const { 
    username, profileViews, githubStats, activityGraph, languages, privateRepos,
    trophies, proBadge, starsBadge, arcticBadge, devProgramBadge, sponsorBadge,
    metrics, streak
  } = othersFormData;

  //function to update form data state upon form change
  const onChange = e => (
    setOthersFormData({ ...othersFormData, [e.target.name]: e.target.value })
  );

  const handleCheckbox = (e, isTrue) => {
    setPending(true);
    const name = e.target.name;

    switch (name) {
      case "profileViews":
        if (!isTrue) { setOthersFormData({ ...othersFormData, profileViews: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, profileViews: false }); }
        setPending(false);
        break;
      case "githubStats":
        if (!isTrue) { setOthersFormData({ ...othersFormData, githubStats: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, githubStats: false }); }
        setPending(false);
        break;
      case "activityGraph":
        if (!isTrue) { setOthersFormData({ ...othersFormData, activityGraph: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, activityGraph: false }); }
        setPending(false);
        break;
      case "languages":
        if (!isTrue) { setOthersFormData({ ...othersFormData, languages: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, languages: false }); }
        setPending(false);
        break;
      case "privateRepos":
        if (!isTrue) { setOthersFormData({ ...othersFormData, privateRepos: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, privateRepos: false }); }
        setPending(false);
        break;
      case "trophies":
        if (!isTrue) { setOthersFormData({ ...othersFormData, trophies: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, trophies: false }); }
        setPending(false);
        break;
      case "proBadge":
        if (!isTrue) { setOthersFormData({ ...othersFormData, proBadge: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, proBadge: false }); }
        setPending(false);
        break;
      case "starsBadge":
        if (!isTrue) { setOthersFormData({ ...othersFormData, starsBadge: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, starsBadge: false }); }
        setPending(false);
        break;
      case "arcticBadge":
        if (!isTrue) { setOthersFormData({ ...othersFormData, arcticBadge: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, arcticBadge: false }); }
        setPending(false);
        break;
      case "devProgramBadge":
        if (!isTrue) { setOthersFormData({ ...othersFormData, devProgramBadge: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, devProgramBadge: false }); }
        setPending(false);
        break;
      case "sponsorBadge":
        if (!isTrue) { setOthersFormData({ ...othersFormData, sponsorBadge: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, sponsorBadge: false }); }
        setPending(false);
        break;
      case "metrics":
        if (!isTrue) { setOthersFormData({ ...othersFormData, metrics: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, metrics: false }); }
        setPending(false);
        break;
      case "streak":
        if (!isTrue) { setOthersFormData({ ...othersFormData, streak: true }); }
        else if (isTrue) { setOthersFormData({ ...othersFormData, streak: false }); }
        setPending(false);
        break;
    }
  };

  return (
    <Form>
      <Form.Group controlId="formGridEmail">
        <Form.Label>GitHub</Form.Label>
        <Form.Control
          name="username"
          type="text"
          defaultValue="Enter your username..."
          rules={{ required: true }}
          value={othersFormData ? username : "loveliiivelaugh"}
          onChange={onChange}
        />
        <Form.Text>*Github username required.</Form.Text>
      </Form.Group>

      <h3>Statistics</h3>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label id={profileViews}>Show profile views</Form.Label>
            <Form.Check type="checkbox" name="profileViews"
              onClick={e => handleCheckbox(e, profileViews)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id={githubStats}>Show GitHub statistics</Form.Label>
            <Form.Check type="checkbox" name="githubStats"
              onClick={e => handleCheckbox(e, githubStats)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id={activityGraph}>Show GitHub Activity Graph</Form.Label>
            <Form.Check type="checkbox" name="activityGraph"
              onClick={e => handleCheckbox(e, activityGraph)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label id={languages}>Show most used languages</Form.Label>
            <Form.Check type="checkbox" name="languages"
              onClick={e => handleCheckbox(e, languages)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id={privateRepos} disabled={true}>Include private repositories</Form.Label>
            <Form.Check type="checkbox" name="privateRepos"
              onClick={e => handleCheckbox(e, privateRepos)}
            />
          </Form.Group>
        </Col>
      </Row>

      <h3>Github Trophies</h3>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label id={trophies}>Show Trophies</Form.Label>
            <Form.Check type="checkbox" name="trophies"
              onClick={e => handleCheckbox(e, trophies)}
            />
          </Form.Group>
        </Col>
      </Row>


      <h3>Github Badges</h3>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label id={arcticBadge}>Arctic Contributor</Form.Label>
            <Form.Check type="checkbox" name="arcticBadge"
              onClick={e => handleCheckbox(e, arcticBadge)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label id={devProgramBadge}>Developer Program</Form.Label>
            <Form.Check type="checkbox" name="devProgramBadge"
              onClick={e => handleCheckbox(e, devProgramBadge)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id={starsBadge}>Stars Program</Form.Label>
            <Form.Check type="checkbox" name="starsBadge"
              onClick={e => handleCheckbox(e, starsBadge)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label id={sponsorBadge}>Sponsor</Form.Label>
            <Form.Check type="checkbox" name="sponsorBadge"
              onClick={e => handleCheckbox(e, sponsorBadge)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label id={proBadge}>GitHub Pro</Form.Label>
            <Form.Check type="checkbox" name="proBadge"
              onClick={e => handleCheckbox(e, proBadge)}
            />
          </Form.Group>
        </Col>
      </Row>

      <h3>Github Metrics</h3>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label id={metrics}>Show GitHub metrics</Form.Label>
            <Form.Check type="checkbox" name="metrics"
              onClick={e => handleCheckbox(e, metrics)}
            />
          </Form.Group>
        </Col>
      </Row>

      <h3>Github Streak Stats</h3>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label id={streak}>Show GitHub Streak stats</Form.Label>
            <Form.Check type="checkbox" name="streak"
              onClick={e => handleCheckbox(e, streak)}
            />
          </Form.Group>
        </Col>
      </Row>

    </Form>
  )
}

export default OthersForm;