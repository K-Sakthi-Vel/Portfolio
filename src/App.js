import React, { useEffect, useState } from "react"
import './App.css';
import Navbar from './component/Navbar';
import Summary from "./component/Summary";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Course from "./component/Course";
import Certificates from "./component/Certificates";
import Findme from "./component/Findme";
import Footer from "./component/Footer";



function App() {
  const [heightOfScroll, setHeightOfScroll] = useState();

  function handleScroll () {

    const currentScrollPos = window.pageYOffset;

    setHeightOfScroll(currentScrollPos);

  }
  console.log(heightOfScroll,"SSS")

  useEffect(()=>{

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {

      window.removeEventListener('scroll', handleScroll);

    };

  },[])

  return (
    <>
      <Navbar scrollHeight={heightOfScroll}/>
      <Summary/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Course/>
      <Certificates/>
      <Findme/>
      <Footer/>
    </>
  );
}

export default App;
