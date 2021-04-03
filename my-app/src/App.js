import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Navbar.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Project from './components/Project.js'

function App()  {

  return (
    <div>
    <Router>
    <Nav />
    <Switch>
    <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={About} />
        </Switch>
    </Router>
<Footer />
    </div>

  );
}


export default App;
