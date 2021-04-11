import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hello from './Hello'
import About from './About'
import Projects from './Projects'
import Cv from './Cv'
import ContactForm from './ContactForm'
import { Switch, Route } from 'react-router-dom'


const App = () => {
  return (
   <>
     <Header />
     <Switch>
      <Route exact path="/" component={Hello}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/cv" component={Cv}></Route>
      <Route exact path="/contact" component={ContactForm}></Route>
      <Hello />
     </Switch>
     <Footer />
   </>
  )
};

export default App