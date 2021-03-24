import { Button, Jumbotron } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Jumbotron>
      <h1>GitHub Profile README Generator</h1>
      <p>
        Super simple GitHub profile Readme generator made with React.js, that allows you to create beautiful Readme files that you can copy/paste in your profile.
      </p>
      <hr />
      <p>
        What is a GitHub profile Readme? Check out the repository to learn more.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default Header;