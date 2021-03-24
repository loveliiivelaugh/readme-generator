import React from 'react';
import Header from './components/Header';
import InstructionsBox from './components/InstructionsBox';
import FormNav from './components/FormNav';
import HeaderForm from './components/HeaderForm';
import AdditionalForm from './components/AdditionalForm';
import SocialForm from './components/SocialForm';
import OthersForm from './components/OthersForm';
import PreviewCard from './components/PreviewCard';
import MarkdownCard from './components/MarkdownCard';
import Footer from './components/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  const [formNavSelector, toggleFormNavSelector] = React.useState("header");
  const [headerFormData, setHeaderFormData] = React.useState({
    heading: '',
    subtitle: '',
    about: '',
    skills: '',
    bannerUrl: '',
  });
  const [additionalFormData, setAdditionalFormData] = React.useState({
    workingOn: "",
    collaborate: "",
    aboutMe: "",
    pronouns: "",
    learning: "",
    helpMe: "",
    contact: "",
    funFact: ""
  });
  const [socialFormData, setSocialFormData] = React.useState({
    github: "",
    hashnode: '',
    facebook: '',
    twitter: '',
    codesandbox: '',
    youtube: '',
    devTo: '',
    linkedIn: '',
    codepen: '',
    stackoverflow: '',
    reddit: '',
    website: ''
  });
  const [othersFormData, setOthersFormData] = React.useState({
    username: "",
    profileViews: true,
    githubStats: true,
    activityGraph: true,
    languages: true,
    privateRepos: true,
    trophies: true,
    proBadge: true,
    starsBadge: true,
    arcticBadge: true,
    devProgramBadge: true,
    sponsorBadge: true,
    metrics: true,
    streak: true
  });

  const data = {
    headerFormData: headerFormData,
    additionalFormData: additionalFormData,
    socialFormData: socialFormData,
    othersFormData: othersFormData,
  };

  const mockData = {
    headerFormData: {
      heading: "I am a shiny new project!",
      subtitle: "Built with create-react-app",
      about: "Changing the world one application at a time.",
      skills: "JS HTML CSS React Python",
      bannerUrl: ''
    },
    additionalFormData: {
      workingOn: "Life",
      collaborate: "everything and anything",
      aboutMe: "my family",
      pronouns: "He him",
      learning: "web development",
      helpMe: "securing a job",
      contact: "web email phone linkedin github",
      funFact: "Single parent"
    },
    socialFormData: {
      github: "github.com/loveliiivelaugh",
      hashnode: '',
      facebook: '',
      twitter: 'twitter.com/loveliiivelaugh',
      codesandbox: '',
      youtube: '',
      devTo: '',
      linkedIn: 'linkedin.com/to/michaelanthonywoodward',
      codepen: '',
      stackoverflow: '',
      reddit: '',
      website: 'michaelwoodward.dev'
    },
    othersFormData: {
      username: "loveliivelaugh",
      statistics: {
        profileViews: true,
        githubStats: true,
        activityGraph: true,
        languages: true,
        privateRepos: false,
      },
      trophies: {
        show: true,
      },
      badges: {
        proBadge: true,
        starsBadge: true,
        arcticBadge: false,
        devProgramBadge: false,
        sponsorBadge: false,
      },
      metrics: {
        show: true
      },
      streak: {
        show: true
      }
    },
  }

  return (
    <React.Fragment>

      <Header />

        <Row>
          <Col xs={6} sm={6} md={6}>
            <InstructionsBox />

            <FormNav toggleFormNavSelector={toggleFormNavSelector} />

            {formNavSelector === "header" && 
              <HeaderForm 
                headerFormData={headerFormData} 
                setHeaderFormData={setHeaderFormData} 
              />
            }

            {formNavSelector === "additional" && 
              <AdditionalForm 
                additionalFormData={additionalFormData}
                setAdditionalFormData={setAdditionalFormData} 
              />
            }

            {formNavSelector === "social" && 
              <SocialForm 
                socialFormData={socialFormData}
                setSocialFormData={setSocialFormData} 
              />
            }

            {formNavSelector === "others" && 
              <OthersForm 
                othersFormData={othersFormData}
                setOthersFormData={setOthersFormData} 
              />
            }

          </Col>
          <Col xs={6} sm={6} md={6}>
            <PreviewCard data={mockData} />

            <MarkdownCard data={mockData} />
          </Col>
        </Row>

      <Footer />

    </React.Fragment>
  );
}

export default App;
