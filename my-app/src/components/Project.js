import React from 'react'
import { ExternalLink } from 'react-external-link';
import password from './images/password.png'
import project1 from './images/project1.png'


function Create(props) {
    return <p> {props.name}</p>;
  }

function Project() {
        return(
            <>
           <h1>Projects</h1>
           <div>
        
      <img src={project1} alt="Logo" />; 
      <Create name="ISS Locater" />
      <ExternalLink href="https://github.com/tika27/SpaceEvent.location"><span>Click here to see the repo</span></ExternalLink>
      <p></p>
      <ExternalLink href="https://tika27.github.io/SpaceEvent.location/"><span>Click here for the deployed App</span></ExternalLink>
      <Create name="Team Profile Generator" />
      <ExternalLink href="https://github.com/chall8001/team_html_page"><span>Click here to see the repo</span></ExternalLink>
      <Create name="Password Generator" />
      <img src={password} alt="Logo" />;
      <ExternalLink href="https://github.com/chall8001/password_generator_JS"><span>Click here to see the repo</span></ExternalLink>
      <Create name="Horoscope Web Application" />
      <ExternalLink href="https://github.com/CurtisPazdar/Astrology-P2"><span>Click here to see the repo</span></ExternalLink>
      <p></p>
      <ExternalLink href="https://github.com/CurtisPazdar/Astrology-P2"><span>Click here for the deployed App</span></ExternalLink>
    <Create name="Politics Web App" />
    <ExternalLink href="https://github.com/chall8001/deep_money_web_app"><span>Click here to see the repo</span></ExternalLink>
    <Create name="Weather Application" />
    <ExternalLink href="https://github.com/chall8001/weather_application-"><span>Click here to see the repo</span></ExternalLink>
    </div>
            </>

        )
    
}

export default Project