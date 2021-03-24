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
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  const [formNavSelector, toggleFormNavSelector] = React.useState("header");
  const [headerFormData, setHeaderFormData] = React.useState();
  const [additionalFormData, setAdditionalFormData] = React.useState();
  const [socialFormData, setSocialFormData] = React.useState();
  const [othersFormData, setOthersFormData] = React.useState();

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
    othersFormData: "",
  }

  return (
    <React.Fragment>

      <Header />

        <Row>
          <Col xs={6} sm={6} md={6}>
            <InstructionsBox />

            <FormNav toggleFormNavSelector={toggleFormNavSelector} />

            {formNavSelector === "header" && <HeaderForm setHeaderFormData={setHeaderFormData} />}

            {formNavSelector === "additional" && <AdditionalForm setAdditionalFormData={setAdditionalFormData} />}

            {formNavSelector === "social" && <SocialForm setSocialFormData={setSocialFormData} />}

            {formNavSelector === "others" && <OthersForm setOthersFormData={setOthersFormData} />}

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
