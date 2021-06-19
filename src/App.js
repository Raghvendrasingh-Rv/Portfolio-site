import React from 'react'
import GitHub from './MyComponent/GitHub'
import Navbar from './MyComponent/Navbar';
import {
  BrowserRouter,
  Route
} from "react-router-dom"


import './App.css';
import Projects from './Projects';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import About from './About'

function App() {

  return (
    <>

      <BrowserRouter>
        <Route exact path="/">
          <Navbar />
          <Home />
          <About />
          <Services />
          <GitHub />
          <Projects />
          <Footer />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;


