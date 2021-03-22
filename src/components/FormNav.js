import { Nav } from 'react-bootstrap';

const FormNav = ({ toggleFormNavSelector }) => {
  return (
    <Nav variant="pills" activeKey="1" onSelect={toggleFormNavSelector}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" disabled>
          NavLink 4 content
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default FormNav;