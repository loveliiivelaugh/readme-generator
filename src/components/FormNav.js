import { Button, Nav } from 'react-bootstrap';

const FormNav = ({ toggleFormNavSelector }) => {

  const handleClick = (e) => {
    e.preventDefault();
    const button = e.target.id;

    switch(button) {
      case "header-button":
        toggleFormNavSelector("header");
        break;
      case "additional-button":
        toggleFormNavSelector("additional");
        break;
      case "social-button":
        toggleFormNavSelector("social");
        break;
      case "others-button":
        toggleFormNavSelector("others");
        break;
      default:
        toggleFormNavSelector("header");
    }
  };

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Button id="header-button" size="lg" variant="outline" onClick={handleClick}>
          Header
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button id="additional-button" size="lg" variant="outline"  onClick={handleClick}>
          Additional
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button id="social-button" size="lg" variant="outline"  onClick={handleClick}>
          Social
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button id="others-button" size="lg" variant="outline"  onClick={handleClick}>
          Others
        </Button>
      </Nav.Item>
    </Nav>
  )
}

export default FormNav;