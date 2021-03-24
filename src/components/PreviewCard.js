import React from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
// icons
import { 
  FaCodepen,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaRandom,
  FaRedditAlien,
  FaShopify, 
  FaWordpress, 
  FaSalesforce,
  FaStackOverflow,
  FaTwitter,
  FaQuestion,
  FaYoutube
  } from 'react-icons/fa';
import { 
  SiHashnode, 
  SiCodesandbox
} from 'react-icons/si';
import { MdComputer } from 'react-icons/md';

const PreviewCard = (props) => {
  const headerData = props.data.headerFormData;
  const additionalData = props.data.additionalFormData;
  const socialData = props.data.socialFormData;
  const othersData = props.data.othersFormData;
  const skills = headerData.skills.split(" ");

  const socialDataList = {
    display:'flex',
    gap:'20px',
    listStyleType: 'none',
    fontSize:'40px',
  };

  return (
    <Card>
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
      {additionalData &&
      <>
        <ul>
          {additionalData.workingOn && <li>🔭 I'm currently working on {additionalData.workingOn}.</li> }
          {additionalData.learning && <li>🌱 I'm currently learning {additionalData.learning}</li> }
          {additionalData.collaborate && <li>👯 I'm looking to collaborate on {additionalData.collaborate}</li> }
          {additionalData.help && <li>🤔 I'm looking for help with {additionalData.help}</li> }
          {additionalData.aboutMe && <li>💬  Ask me about: {additionalData.aboutMe}</li> }
          {additionalData.pronouns && <li>😄 Pronous: {additionalData.pronouns}</li> }
          {additionalData.contact && <li>📫How to reach me: {additionalData.contact}</li> }
          {additionalData.funFact && <li>⚡Fun fact: {additionalData.funFact}</li> }
        </ul>
      </>
      }
      {socialData &&
      <>
        <ul style={socialDataList}>
          {socialData.github && 
            <a href={socialData.github} target="blank">
              <li><FaGithub color="#000"/></li>
            </a>
          }
          {socialData.hashnode && 
            <a href={socialData.hashnode} target="blank">
              <li><SiHashnode color="#000" /></li>
            </a> 
          }
          {socialData.facebook && 
            <a href={socialData.facebook} target="blank">
              <li><FaFacebook color="#000" /></li> 
            </a>
          }
          {socialData.twitter && 
            <a href={socialData.twitter} target="blank">
              <li><FaTwitter color="#000" /></li> 
            </a>
          }
          {socialData.codeSandbox && 
            <a href={socialData.codeSandbox} target="blank">
              <li><SiCodesandbox color="#000" /></li> 
            </a>
          }
          {socialData.youtube && 
            <a href={socialData.youtube} target="blank">
              <li><FaYoutube color="#000" /></li> 
            </a>
          }
          {socialData.devTo && 
            <a href={socialData.devTo} target="blank">
              <li><FaQuestion color="#000" /></li> 
            </a>
          }
          {socialData.linkedIn && 
            <a href={socialData.linkedIn} target="blank">
              <li><FaLinkedin color="#000" /></li> 
            </a>
          }
          {socialData.instagram && 
            <a href={socialData.instagram} target="blank">
              <li><FaInstagram color="#000" /></li> 
            </a>
          }
          {socialData.codepen && 
            <a href={socialData.codepen} target="blank">
              <li><FaCodepen color="#000" /></li> 
            </a>
          }
          {socialData.stackOverflow && 
            <a href={socialData.stackOverflow} target="blank">
              <li><FaStackOverflow color="#000" /></li> 
            </a>
          }
          {socialData.reddit && 
            <a href={socialData.reddit} target="blank">
              <li><FaRedditAlien color="#000" /></li> 
            </a>
          }
          {socialData.website && 
            <a href={socialData.website} target="blank">
              <li><MdComputer color="#000" /></li> 
            </a>
          }
          {socialData.others && 
            <a href={socialData.others} target="blank">
              <li><FaRandom color="#000" /></li> 
            </a>
          }
        </ul>
      </>
      }

      {othersData &&
      <>

      </>
      }
    </Card>
  )
}

export default PreviewCard;