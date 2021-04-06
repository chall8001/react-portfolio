import React from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom'
import Nav from './components/Navbar.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Project from './components/Project.js'

function App()  {

  return (
    <div>
   <HashRouter>
    <Nav />
    <Switch>
    <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={About} />
        </Switch>
   </HashRouter>
<Footer />
    </div>

  );
}


export default App;
