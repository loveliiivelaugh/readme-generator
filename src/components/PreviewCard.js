import React from 'react';
import { Card } from 'react-bootstrap';
//components
import PreviewCardHeader from './PreviewCardHeader';
import PreviewCardAdditionalSection from './PreviewCardAdditionalSection';
import PreviewCardSocialSection from './PreviewCardSocialSection';
import PreviewCardOthersSection from './PreviewCardOthersSection';

const PreviewCard = (props) => {
  const headerData = props.data.headerFormData;
  const additionalData = props.data.additionalFormData;
  const socialData = props.data.socialFormData;
  const othersData = props.data.othersFormData;

  return (
    <Card>
      <cite>Preview</cite>

      <PreviewCardHeader headerData={headerData} />

      { additionalData && <PreviewCardAdditionalSection additionalData={additionalData} /> }

      { socialData && <PreviewCardSocialSection socialData={socialData} /> }

      { othersData && <PreviewCardOthersSection othersData={othersData} /> }

    </Card>
  )
}

export default PreviewCard;