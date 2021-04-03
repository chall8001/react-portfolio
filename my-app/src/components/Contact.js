import React from 'react';
import { ExternalLink } from 'react-external-link';


function Contact() {
   
    return (
      <div>
     <center><h1>Contact Me</h1></center>
     <center><p>My cell is 203-823-6465. My linkedin is  <ExternalLink href="https://www.linkedin.com/feed/"> <span>here.</span></ExternalLink></p></center>
     <center><p>My Github is <ExternalLink href="https://github.com/chall8001"><span>here</span></ExternalLink></p></center>
     <center><p>My email is chall8001@gmail.com</p></center>
      </div>
  
    );
  }

  export default Contact;