
const PreviewCardAdditionalSection = ({ additionalData }) => {
  return (
    <>
      <ul>
        {additionalData.workingOn && <li>ð­ I'm currently working on {additionalData.workingOn}.</li> }
        {additionalData.learning && <li>ð± I'm currently learning {additionalData.learning}</li> }
        {additionalData.collaborate && <li>ð¯ I'm looking to collaborate on {additionalData.collaborate}</li> }
        {additionalData.help && <li>ð¤ I'm looking for help with {additionalData.help}</li> }
        {additionalData.aboutMe && <li>ð¬  Ask me about: {additionalData.aboutMe}</li> }
        {additionalData.pronouns && <li>ð Pronous: {additionalData.pronouns}</li> }
        {additionalData.contact && <li>ð«How to reach me: {additionalData.contact}</li> }
        {additionalData.funFact && <li>â¡Fun fact: {additionalData.funFact}</li> }
      </ul>
    </>
  )
};

export default PreviewCardAdditionalSection;