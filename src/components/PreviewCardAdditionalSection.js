
const PreviewCardAdditionalSection = ({ additionalData }) => {
  return (
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
  )
};

export default PreviewCardAdditionalSection;