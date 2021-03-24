import { Button, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const PreviewCard = (props) => {
  console.info(props.data)
  
  const heading = props.data.headerFormData && props.data.headerFormData.heading;
  const headerData = props.data.headerFormData && props.data.headerFormData;
  const skills = props.data.headerFormData && props.data.headerFormData.skills.split(" ");
  const additionalData = props.data.additionalFormData && props.data.additionalFormData;
  const socialData = props.data.socialFormData && props.data.socialFormData;
  const othersData = props.data.othersFormData && props.data.othersFormData;
  console.info(skills)

  const markdown = `
    
    ## ${heading ? heading : 'My shiny new project!'}

    ### ${headerData && headerData.subtitle}

    ${headerData && headerData.about}

    ## Skills:

    ${(skills && skills.length > 0) &&
      skills.map(skill => ( `${skill.toUpperCase()} /` ))
    }

    ${additionalData && (`
      - 🔭 I'm currently working on ${additionalData.workingOn}
      - 🌱 I'm currently learning ${additionalData.learning}
      - 🤔 I'm looking for help with ${additionalData.helpMe}
      - 💬 Ask me about ${additionalData.aboutMe}
      - 📫 How to reach me: ${additionalData.contact}`
    )}

    ${socialData &&
      socialData.github &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](${socialData.github})`
    }
    ${socialData &&
      socialData.hashnode &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hashnode.svg' alt='hashnode' height='40'>](${socialData.hashnode})`
    }
    ${socialData &&
      socialData.facebook &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg' alt='facebook' height='40'>](${socialData.facebook})`
    }
    ${socialData &&
      socialData.twitter &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='40'>](${socialData.twitter})`
    }
    ${socialData &&
      socialData.codesandbox &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg' alt='codesandbox' height='40'>](${socialData.codesandbox})`
    }
    ${socialData &&
      socialData.youtube &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='youtube' height='40'>](${socialData.youtube})`
    }
    ${socialData &&
      socialData.devTo &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/devTo.svg' alt='devTo' height='40'>](${socialData.devTo})`
    }
    ${socialData &&
      socialData.linkedIn &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedIn.svg' alt='linkedIn' height='40'>](${socialData.linkedIn})`
    }
    ${socialData &&
      socialData.codepen &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg' alt='codepen' height='40'>](${socialData.codepen})`
    }
    ${socialData &&
      socialData.stackoverflow &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' alt='stackoverflow' height=(${socialData.stackoverflow})'40'>]`
    }
    ${socialData &&
      socialData.reddit &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg' alt='reddit' height='40'>](${socialData.reddit})`
    }
    ${socialData &&
      socialData.website &&
      `[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/website.svg' alt='website' height='40'>](${socialData.website})`
    }

    ${(othersData && othersData.proBadge) &&
      `<a href='https://github.com/pricing'><img src='https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/pro.gif' width='40' height='40' /></a>`
    }
    ${othersData && othersData.starsBadge &&
      `<a href='https://stars.github.com/'><img src='https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif' width='35' height='35' /></a> `
    }
    
    ${othersData && 
      othersData.trophies.show &&
      `[![trophy](https://github-profile-trophy.vercel.app/?username=${othersData.username})](https://github.com/ryo-ma/github-profile-trophy)`
    }

    ${othersData && 
      othersData.statistics.languages &&
      `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${othersData.username})](https://github.com/anuraghazra/github-readme-stats)`
    }

    ${othersData && 
      othersData.statistics.githubStats &&
      `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${othersData.username}&show_icons=true&count_private=true)`
    }
    
    ${othersData && 
      othersData.statistics.activityGraph &&
      `![GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=loveliiivelaugh)`
    }
    
    ${othersData && 
      othersData.metrics.show &&
      `![GitHub metrics](https://metrics.lecoq.io/${othersData.username}`
    }

    ${othersData && 
      othersData.streak.show &&
      `![GitHub streak stats](https://github-readme-streak-stats.herokuapp.com/?user=${othersData.username}) `
    }

    ${othersData && 
      othersData.statistics.profileViews &&
      `![Profile views](https://gpvc.arturio.dev/${othersData.username})`
    }

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