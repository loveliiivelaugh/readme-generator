import Card from 'react-bootstrap/Card';

const PreviewCardHeader = ({ headerData }) => {
  const skills = headerData.skills.split(" ");
  return (
    <>
      <Card.Header>
        <Card.Title  as="h1">{(headerData && headerData.heading) || "Your Title"}</Card.Title>
        <Card.Subtitle as="h3">{(headerData && headerData.subtitle) || "Your subtitle"}</Card.Subtitle>
      </Card.Header>
      <Card.Img src={headerData && headerData.bannerUrl ||  "https://via.placeholder.com/300"} alt="Banner image" />
      <Card.Body>
          <Card.Text>
            {headerData && ' ' + headerData.about + ' ' || "Tell us some information about yourself..."}
          </Card.Text>
          <Card.Text>
            Skills: {skills && skills.map(skill => `${skill.toUpperCase()} / `)}
          </Card.Text>
      </Card.Body>
    </>
  )
};

export default PreviewCardHeader;