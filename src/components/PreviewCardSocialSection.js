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


const PreviewCardSocialSection = ({ socialData }) => {

  const socialDataList = {
    display:'flex',
    gap:'20px',
    listStyleType: 'none',
    fontSize:'40px',
  };

  return (
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
  )
};

export default PreviewCardSocialSection;