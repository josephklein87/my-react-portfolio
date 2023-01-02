import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import './App.css';
import About from "./components/About";



function App() {
  return (
   <>
   <Nav />
   <Home />
   <About />
   <Skills />
   <Projects />
   <ContactForm />
   </>
  );
}

export default App;
