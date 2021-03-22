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
import './App.css';

function App() {
  const [formNavSelector, toggleFormNavSelector] = React.useState("header");

  const data = {};

  return (
    <React.Fragment>

      <Header />

      <Container>
        <Col xs={6} md={6}>
          <InstructionsBox />

          <FormNav toggleFormNavSelector={toggleFormNavSelector} />

          {formNavSelector === "header" && <HeaderForm />}
          {formNavSelector === "additional" && <AdditionalForm />}
          {formNavSelector === "social" && <SocialForm />}
          {formNavSelector === "others" && <OthersForm />}
        </Col>
        <Col xs={6} md={6}>
          <PreviewCard data={data} />

          <MarkdownCard data={data} />
        </Col>
      </Container>

      <Footer />

    </React.Fragment>
  );
}

export default App;
