import { Button, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const PreviewCard = (props) => {
  console.info(props.data)
  
  const heading = props.data.headerFormData && props.data.headerFormData.heading;
  const headerData = props.data.headerFormData && props.data.headerFormData;
  const additionalData = props.data.additionalFormData && props.data.additionalFormData;
  const skills = props.data.additionalFormData && props.data.additionalFormData.skills;
  console.info(skills)

  const markdown = `
    # This is a header 1 ${heading ? heading : ''}

    ## This is a header 2 

    ![Profile views](https://gpvc.arturio.dev/[loveliiivelaugh])

    <h1>What if I put tags in here?!</h1>

    - Does any of this work?!

    1. Ordered list

    [link](www.website.com)

    I made this project just for fun, 
    it allows you to create nice and simple GitHub
    Readme files that you can copy/paste
    and use in your profile.

    ## ${heading ? heading : 'My shiny new project!'}

    ### ${headerData && headerData.subtitle}

    ## Skills:

    ${(skills && skills.length > 0) &&
      skills.map(skill => ( `${skill.toUpperCase()}/` ))
    }

    ${additionalData && (`
      - 🔭 I'm currently working on ${additionalData.workingOn}
      - 🌱 I'm currently learning ${additionalData.learning}
      - 🤔 I'm looking for help with ${additionalData.helpMe}
      - 💬 Ask me about ${additionalData.aboutMe}
      - 📫 How to reach me: ${additionalData.contact}`
      )}
      
  `;

  return (
    <Card>
      <Card.Header as="h5">Code</Card.Header>
      <Button variant="primary">Copy</Button>
      <Card.Body>
        <ReactMarkdown children={markdown} />
      </Card.Body>
    </Card>
  )
}

export default PreviewCard;